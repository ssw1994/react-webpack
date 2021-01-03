var express = require("express");
var router = express.Router();
var faker = require("faker");
const query = "mongodb://localhost:27017/store";
var mongoose = require("mongoose");
var ProductModel = require("../schemas/product.schema");
const db = query;
mongoose.Promise = global.Promise;
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) {
      console.log("Error!" + error);
    }
  }
);
const getFakeProducts = () => {
  let products = [];
  for (let i = 0; i < 20; i++) {
    let obj = {};
    obj["metadata"] = {
      ownerId: Math.round(Math.random()),
      owner: faker.name.firstName(),
      company: faker.company.companyName(),
      dataCreated: faker.date.past(),
    };
    obj["images"] = [];
    for (let i = 0; i < 5; i++) obj["images"].push(faker.image.image());
    Object.keys(faker.commerce).forEach((key) => {
      obj[key] = faker.commerce[key]();
    });
    products.push(obj);
  }
  return products;
};
router.get("/", (req, res, next) => {
  ProductModel.find({}, function (err, products) {
    if (!err) res.send(products.concat(getFakeProducts()));
    else res.send([].concat(getFakeProducts()));
  });
});

let cartItems = [];
let wishList = [];

router.post("/addtocart", (req, res, next) => {
  let body = req.body;
  let cartItem = Object.assign({}, body, { id: Date.now() });
  cartItems.push(cartItem);
  res.send(cartItem);
});

router.post("/cart", (req, res, next) => {
  let body = req.body;
  res.send(cartItems.filter((item) => item.userId === body.userId));
});

router.post("/addtowish", (req, res, next) => {
  let body = req.body;
  let wishItem = Object.assign({}, req.body, { id: wishList.length });
  wishList.push(wishItem);
  res.send(wishItem);
});

router.post("/wishlist", (req, res, next) => {
  let body = req.body;
  res.send(wishList.filter((item) => item.userId === body.userId));
});

router.post("/update", (req, res, next) => {
  let body = req.body;
  let index = cartItems.findIndex((x) => x.id === body.item.id);
  if (index >= 0) {
    let item = cartItems[index];
    item.quantity = body.quantity;
    res.send(item);
  } else {
    res.send(body.item);
  }
});

router.post("/cart/remove", (req, res, next) => {
  let body = req.body;
  let index = cartItems.findIndex((x) => x.id === body.id);
  if (index >= 0) {
    res.send(cartItems[index]);
    cartItems = cartItems.filter((x) => x.id !== body.id);
  } else {
    res.send(null);
  }
});

router.post("/saveproduct", (req, res, next) => {
  let product = new ProductModel();
  let data = req.body;
  product.metadata = data.metadata;
  product.images = data.images;
  product.color = data.color;
  product.department = data.department;
  product.productName = data.productName;
  product.price = data.price;
  product.productMaterial = data.productMaterial;
  product.product = data.product;

  product.save(function (error, data) {
    if (error) {
      res.send(null);
    } else {
      res.send(data);
    }
  });
});
module.exports = router;
