const express = require("express");
const router = express.Router();

const productController = require("../controllers/product");

router.route("/categories/:name").get(productController.displayProducts);

router.route("/").get(productController.favoriteProducts);

module.exports = router;
