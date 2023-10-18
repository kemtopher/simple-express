var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var projectRouter = require("./routes/projects");

var app = express();
var PORT = 3000;

// view engine setup
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/projects", projectRouter);

app.listen(PORT, function (err) {
  if (err) console.log("there's been an error");

  console.log("listening ...");
});
module.exports = app;
