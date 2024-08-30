const express = require('express');
const {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    archiveProduct
} = require('../controllers/product');

const router = express.Router();

router.route('/')
    .post(createProduct)      // Create a product
    .get(getProducts);        // Get all products

router.route('/:id')
    .get(getProduct)          // Get a single product
    .put(updateProduct)       // Update a product
    .delete(deleteProduct);   // Delete a product

router.route('/:id/archive')
    .put(archiveProduct);     // Archive a product

module.exports = router;