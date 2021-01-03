var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  metadata: {
    ownerId: Number,
    owner: String,
    company: String,
    dataCreated: String,
  },
  images: [String],
  color: String,
  department: String,
  productName: String,
  price: Number,
  productMaterial: String,
  product: String,
});

module.exports = mongoose.model("products", ProductSchema, "products");
