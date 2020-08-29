var express = require("express");
var router = express.Router();
var authenticate = require("./token");
router.post("/autheticate", (req, res, next) => {
  let body = req.body;
  console.log(body);
});
