const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  img: { type: String, require: true },
  quantity: { type: Number, require: true },
});

module.exports = mongoose.model("product", productSchema);
