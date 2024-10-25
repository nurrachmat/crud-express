// Mengimpor modul mongoose untuk mengelola skema dan model MongoDB
const mongoose = require("mongoose");

// Definisikan skema untuk prodi
const prodiSchema = new mongoose.Schema({
  // Field untuk nama prodi
  nama: {
    type: String, // Tipe data string
    required: true, // Field ini wajib diisi
    trim: true, // Menghapus spasi di awal dan akhir string
  },
  // Field untuk singkatan prodi
  singkatan: {
    type: String, // Tipe data string
    required: true, // Field ini wajib diisi
    trim: true, // Menghapus spasi di awal dan akhir string
  },
  // Field untuk fakultas_id yang menjadi referensi ke koleksi Fakultas
  fakultas_id: {
    type: mongoose.Schema.Types.ObjectId, // Tipe data ObjectId untuk referensi ke Fakultas
    ref: "Fakultas", // Referensi ke model Fakultas
    required: true, // Field ini wajib diisi
  },
  // Field untuk menyimpan tanggal pembuatan data prodi
  createdAt: {
    type: Date, // Tipe data tanggal
    default: Date.now, // Default adalah tanggal dan waktu saat ini
  },
});

// Buat model Prodi dari skema yang telah didefinisikan
const Prodi = mongoose.model("Prodi", prodiSchema);

// Mengeksport model Prodi agar dapat digunakan di file lain
module.exports = Prodi;
