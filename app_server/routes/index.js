var express = require("express");
var router = express.Router();

// Import Controller
const mainController = require("../controllers/mainController");

/* GET home page. */
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);

module.exports = router;
