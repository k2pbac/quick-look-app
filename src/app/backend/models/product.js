const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true },
  likes: { type: Number, required: false },
});

module.exports = mongoose.model("Product", productSchema);
