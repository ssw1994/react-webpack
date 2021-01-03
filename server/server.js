var express = require("express");
var router = require("./routes/routes.js");
var bodyParser = require("body-parser");
var productRouter = require("./routes/products");
var addressRouter = require("./routes/address");
var utilRouter = require("./routes/util");
var path = require("path");
var app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../client"));
app.use(express.static(path.join(__dirname, "../client")));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/app", router);
app.use("/api/products", productRouter);
app.use("/api/address", addressRouter);
app.use("/api/util", utilRouter);
module.exports = app;
