// =============================================================
// db.js — Koneksi Database (PostgreSQL / MySQL / MongoDB)
// TODO: pilih driver sesuai keputusan tim (mis. pg, mysql2,
// atau mongoose) dan isi koneksi menggunakan variabel di .env
// =============================================================

// Contoh jika memakai PostgreSQL (pg):
// const { Pool } = require("pg");
// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// });
// module.exports = pool;

module.exports = {
  connect: () => {
    console.log("TODO: implementasikan koneksi database di sini.");
  },
};
