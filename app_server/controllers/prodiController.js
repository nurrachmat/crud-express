const index = (req, res) => {
  const prodi = [
    {
      nama: "Sistem Informasi",
      fakultas: "Fakultas Ilmu Komputer dan Rekayasa",
      singkatan: "SI",
    },
    {
      nama: "Informatika",
      fakultas: "Fakultas Ilmu Komputer dan Rekayasa",
      singkatan: "IF",
    },
    {
      nama: "Manajemen Informatika",
      fakultas: "Fakultas Ilmu Komputer dan Rekayasa",
      singkatan: "MI",
    },
    {
      nama: "Teknik Elektro",
      fakultas: "Fakultas Ilmu Komputer dan Rekayasa",
      singkatan: "TE",
    },
    {
      nama: "Akuntansi",
      fakultas: "Fakultas Ekonomi dan Bisnis",
      singkatan: "IF",
    },
    {
      nama: "Manajemen",
      fakultas: "Fakultas Ekonomi dan Bisnis",
      singkatan: "MJ",
    },
  ];
  res.render("prodi", {
    title: "Halaman Program Studi",
    prodi,
    layout: "main",
  });
};

module.exports = { index };
