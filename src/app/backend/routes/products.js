const express = require("express");
const router = express.Router();

const productController = require("../controllers/product");

router.route("/").get(productController.displayProducts);

module.exports = router;
