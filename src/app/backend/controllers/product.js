const Product = require("../models/product");

module.exports.favoriteProducts = async (req, res) => {
  const favorites = await Product.find({ likes: 0 }).limit(6);

  res.status(200).json({
    products: favorites,
    message: "Products Retrieved",
  });
};

module.exports.displayProducts = async (req, res) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.currentpage;
  const count = await Product.estimatedDocumentCount();
  const { name } = req.params;
  if (pageSize && currentPage) {
    const products = await Product.find({ category: name })
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
    res.status(200).json({
      products: products,
      message: "Products Retrieved",
      count: count,
    });
  } else {
    const products = await Product.find({ category: name });
    res.status(200).json({
      products: products,
      message: "Products Retrieved",
      count: count,
    });
  }
};
