const Product = require("../models/product");

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
      message: "Posts Retrieved",
      count: count,
    });
  } else {
    const products = await Product.find({ category: name });
    res.status(200).json({
      products: products,
      message: "Posts Retrieved",
      count: count,
    });
  }
};
