const Product = require("../models/product");

module.exports.displayProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    products: products,
    message: "Posts Retrieved",
  });
};
