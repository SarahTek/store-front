const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();
//routes
router.get("/api/products", productsController.getProducts);
router.post("/api/products", productsController.postProducts);
// router.patch("/api/products/:id", productsController.UpdateProducts);
// router.delete("/api/products/:id", productsController.deleteProducts);

module.exports = router;
