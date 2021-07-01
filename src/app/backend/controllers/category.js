const Category = require("../models/category");

module.exports.displayCategories = async (req, res) => {
  const categories = await Category.find();

  res.status(200).json({
    categories: categories,
    message: "Categories Retrieved",
  });
};
