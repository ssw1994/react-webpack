var express = require("express");
var router = express.Router();
var faker = require("faker");
const { date } = require("faker");
const getFakeProducts = () => {
  let products = [];
  for (let i = 0; i < 20; i++) {
    let obj = {};
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
  res.send(getFakeProducts());
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
module.exports = router;
