require("dotenv").config();
const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const db = require("./db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Setup session
app.use(session({
  secret: process.env.SESSION_SECRET || "defaultsecret",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // secure:false karena tidak pakai HTTPS di lokal
}));


// ======================= SIGNUP =======================

app.post("/signup", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ error: "Semua field wajib diisi" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Password tidak sama" });
  }

  // Cek apakah email sudah ada
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {

    if (err) {
      console.error("MySQL Error (SELECT):", err);
      return res.status(500).json({ error: "Server error saat cek email" });
    }

    if (result.length > 0) {
      return res.status(400).json({ error: "Email sudah digunakan" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      db.query(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, hashedPassword],
        (err, result) => {
          if (err) {
            console.error("MySQL Error (INSERT):", err);
            return res.status(500).json({ error: "Gagal mendaftar" });
          }

          return res.json({ message: "Signup berhasil" });
        }
      );

    } catch (hashError) {
      console.error("Hashing Error:", hashError);
      return res.status(500).json({ error: "Gagal memproses password" });
    }

  });
});


// ======================= LOGIN =======================

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Email dan password wajib diisi" });

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {

    if (err) {
      console.error("MySQL Error (SELECT):", err);
      return res.status(500).json({ error: "Server error saat cek user" });
    }

    if (result.length === 0) {
      return res.status(400).json({ error: "Email tidak ditemukan" });
    }

    const user = result[0];

    try {
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(400).json({ error: "Password salah" });
      }

      req.session.userId = user.id;

      return res.json({ message: "Login berhasil" });

    } catch (compareErr) {
      console.error("Bcrypt Compare Error:", compareErr);
      return res.status(500).json({ error: "Server error saat memproses login" });
    }

  });
});


// ======================= LOGOUT =======================

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Session Destroy Error:", err);
      return res.status(500).json({ error: "Gagal logout" });
    }

    res.json({ message: "Logout berhasil" });
  });
});


// ======================= RUN SERVER =======================

app.listen(process.env.PORT, () => {
  console.log(`Server backend berjalan di port ${process.env.PORT}`);
});
