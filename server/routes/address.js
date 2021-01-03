var express = require("express");
var router = express.Router();
var faker = require("faker");
const random = () =>
  Math.round(Date.now() + Math.round(Math.random() * (100 - 1) + 1));
const createDummyAddress = (userId) => {
  let PersonalInfo = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    contactNo: faker.phone.phoneNumber(),
    id: random(),
    userId: "test",
  };
  let AddressInfo = {};
  Object.keys(faker.address).forEach((key) => {
    AddressInfo[key] = faker.address[key]();
  });
  return Object.assign({}, PersonalInfo, AddressInfo);
};

router.post("/all", (req, res, next) => {
  let body = req.body;
  let addresses = [];
  for (let i = 0; i < 5; i++) addresses.push(createDummyAddress());
  res.send(addresses);
});

module.exports = router;
