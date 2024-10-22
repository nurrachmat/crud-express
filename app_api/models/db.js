// models/db.js
// Mengimpor modul mongoose untuk mengelola koneksi dengan MongoDB
const mongoose = require("mongoose");

// Fungsi asinkron untuk menghubungkan ke database MongoDB
const connectDB = async () => {
  try {
    // Menghubungkan ke MongoDB menggunakan URI koneksi
    await mongoose.connect(
      "mongodb+srv://nurrachmat:BelajarMongo2024@cluster0.dzprir3.mongodb.net/mdpsi5a?retryWrites=true&w=majority&appName=Cluster0"
      // "mongodb+srv://nurrachmat:BelajarMongo2024@cluster0.cltawz3.mongodb.net/mdpsi5a?retryWrites=true&w=majority&appName=Cluster0"
    );
    // Jika koneksi berhasil, log pesan ke konsol
    console.log("MongoDB Connected...");
  } catch (error) {
    // Jika terjadi kesalahan saat menghubungkan, log pesan kesalahan ke konsol
    console.error("MongoDB connection error:", error);
    // Keluar dari proses dengan kode status 1 untuk menandakan ada kesalahan
    process.exit(1);
  }
};

// Mengeksport fungsi connectDB agar dapat digunakan di file lain
module.exports = connectDB;
