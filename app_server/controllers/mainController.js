const index = (req, res) => {
  const berita = [
    {
      judul: "Berita 1",
      isi: "Isi berita 1",
    },
    {
      judul: "Berita 2",
      isi: "Isi berita 2",
    },
    {
      judul: "Berita 3",
      isi: "Isi berita 3",
    },
    {
      judul: "Berita 4",
      isi: "Isi berita 4",
    },
  ];
  res.render("index", { title: "Halaman Home", berita, layout: "main" });
};

const about = (req, res) => {
  res.render("about", { title: "About", layout: "main" });
};

const contact = (req, res) => {
  res.render("contact", { title: "Contact", layout: "main" });
};

module.exports = { index, about, contact };
