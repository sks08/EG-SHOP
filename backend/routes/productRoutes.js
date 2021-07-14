const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

// @desc Get all products from db
// @route GET /api/products
// @access public

router.get("/", getProducts);

// @desc Get a products from db
// @route GET /api/products
// @access public

router.get("/:id", getProductById);

module.exports = router;
