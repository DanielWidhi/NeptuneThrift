const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const db = mysql.createPool({
  host: "localhost",
  user: "root",    // ganti jika username MySQL kamu bukan root
  password: "",    // isi password MySQL kamu
  database: "neptune_thrift"
});

// Test connection
db.getConnection((err) => {
  if (err) {
    console.log("Database connection failed", err);
  } else {
    console.log("MySQL connected");
  }
});

// kirim db ke routes
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
app.use("/api/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
