const express = require('express');

const router = express.Router();

const ProductController = require('../../controllers/product.controller');

router.get('/', ProductController.getProduct);

router.get('/getproduct/:_id', ProductController.getProductDetail);

router.post('/addproduct', ProductController.addProduct);

router.put('/updateProduct/:_id', ProductController.updateProdutByID);

router.delete('/delete/:_id', ProductController.removeProductById);

module.exports = router;
