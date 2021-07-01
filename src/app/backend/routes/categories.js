const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category");

router.route("/categories").get(categoryController.displayCategories);

module.exports = router;
