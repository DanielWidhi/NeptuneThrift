// server.js
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs'); 
const db = require('./db'); // Import koneksi database yang sudah di-promise
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;

// Middleware
app.use(cors({
    origin: CLIENT_URL, 
    credentials: true, // WAJIB: Untuk mengizinkan transfer session cookie
}));
app.use(express.json()); 

// Setup session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    name: 'NeptuneSession', // Nama cookie sesi
    cookie: { 
        secure: process.env.NODE_ENV === 'production', // true jika di production (HTTPS)
        httpOnly: true, // Mencegah akses cookie via JavaScript
        maxAge: 1000 * 60 * 60 * 24 // 24 jam
    } 
}));

// ======================= STATUS CHECK (OPSIONAL TAPI BERMANFAAT) =======================
app.get("/api/auth/status", async (req, res) => {
    if (req.session.userId) {
        // Ambil data user dari DB (jika diperlukan) atau kirim ID sesi saja
        res.json({ isAuthenticated: true, userId: req.session.userId });
    } else {
        res.json({ isAuthenticated: false });
    }
});

// ======================= 1. SIGN UP (POST /api/auth/signup) =======================

app.post("/api/auth/signup", async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    // 1. Validasi Input
    if (!email || !password || !confirmPassword) {
        return res.status(400).json({ error: "Semua field wajib diisi" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Password tidak sama" });
    }

    try {
        // 2. Cek apakah email sudah ada
        const [rows] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
        
        if (rows.length > 0) {
            return res.status(409).json({ error: "Email sudah digunakan" });
        }

        // 3. Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 4. Insert user baru
        await db.query(
            "INSERT INTO users (email, password) VALUES (?, ?)",
            [email, hashedPassword]
        );

        // 5. Kirim respons
        return res.status(201).json({ message: "Pendaftaran berhasil! Silakan login." });

    } catch (error) {
        console.error("Sign up error:", error);
        return res.status(500).json({ error: "Server error saat mendaftar" });
    }
});

// ======================= 2. LOGIN (POST /api/auth/login) =======================

app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email dan password wajib diisi" });
    }

    try {
        // 1. Cari user berdasarkan email
        const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

        if (rows.length === 0) {
            return res.status(401).json({ error: "Email atau password salah" });
        }

        const user = rows[0];

        // 2. Bandingkan password
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ error: "Email atau password salah" });
        }

        // 3. Buat sesi (berhasil login)
        req.session.userId = user.id;

        // 4. Kirim respons berhasil
        return res.json({ message: "Login berhasil", userId: user.id });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ error: "Server error saat memproses login" });
    }
});

// ======================= 3. LOGOUT (POST /api/auth/logout) =======================

app.post("/api/auth/logout", (req, res) => {
    // Hapus sesi pengguna
    req.session.destroy((err) => {
        if (err) {
            console.error("Session Destroy Error:", err);
            return res.status(500).json({ error: "Gagal logout" });
        }
        // Bersihkan cookie sesi
        res.clearCookie('NeptuneSession'); 
        res.json({ message: "Logout berhasil" });
    });
});


// ======================= RUN SERVER =======================

app.listen(PORT, () => {
    console.log(`Server backend berjalan di http://localhost:${PORT}`);
});