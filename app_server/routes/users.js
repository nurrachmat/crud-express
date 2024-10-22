var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // Mengembalikan respons daftar user
  res.send("respond with a list of users");
});

/* GET user detail by id. */
router.get("/:id", function (req, res, next) {
  // Mengambil parameter id dari URL
  const userId = req.params.id;

  // Mengembalikan data user dengan id tertentu
  res.send(`respond with details of user ${userId}`);
});

/* POST create a new user. */
router.post("/", function (req, res, next) {
  // Mendapatkan data user dari body request
  const newUser = req.body;

  // Logika untuk menyimpan user ke database dapat ditambahkan di sini
  // Sementara ini, kita mengirimkan respon sebagai konfirmasi
  //res.status(201).send("New user created");
  res.json({
    message: "New user created",
    data: newUser,
  });
});

/* PUT update an existing user. */
router.put("/:id", function (req, res, next) {
  // Mendapatkan parameter id dan data dari body request
  const userId = req.params.id;
  const updatedUser = req.body;

  // res.send(`User ${userId} has been updated`);
  res.json({
    message: `User ${userId} has been updated`,
    data: updatedUser,
  });
});

/* DELETE remove a user by id. */
router.delete("/:id", function (req, res, next) {
  // Mendapatkan parameter id dari URL
  const userId = req.params.id;

  // Logika untuk menghapus user dengan id tertentu dapat ditambahkan di sini
  res.send(`User ${userId} has been deleted`);
});

module.exports = router;
