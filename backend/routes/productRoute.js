const express = require("express");
const {
  getAllProducts,
  createProducts,
  updateProduct,
  deleteProduct,
  getProductDetail,
} = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/products/new").post(createProducts);

router
  .route("/products/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetail);

module.exports = router;
