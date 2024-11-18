var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors"); // Import cors
const connectDB = require("./app_api/models/db");

const indexRouter = require("./app_server/routes/index");
const fakultasRouter = require("./app_server/routes/fakultas");
const prodiRouter = require("./app_server/routes/prodi");
const usersRouter = require("./app_server/routes/users");

const fakultasRouterApi = require("./app_api/routes/fakultas");
const prodiRouterApi = require("./app_api/routes/prodi");
const authRouterApi = require("./app_api/routes/auth");
const mahasiswaRouterApi = require("./app_api/routes/mahasiswa");

require("dotenv").config(); // Load environment variables

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);
app.use(cors()); // Gunakan middleware cors

app.use("/", indexRouter);
app.use("/fakultas", fakultasRouter);
app.use("/prodi", prodiRouter);
app.use("/users", usersRouter);

// API
app.use("/api/fakultas", fakultasRouterApi);
app.use("/api/prodi", prodiRouterApi);
app.use("/api/auth", authRouterApi);
app.use("/api/mahasiswa", mahasiswaRouterApi);

// Connect to MongoDB
connectDB();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
