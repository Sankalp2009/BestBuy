const express = require('express');
const app = express();
const ProductController = require('../controllers/ProductController');

//This Way is destructured, we can also do it.
// const {getAllTours,getToursById,createTours,updateTours,deleteTours} = require('../controllers/toursController');
const router = express.Router(); //MiddleWare router

router
.route('/')
.get(ProductController.getAllProduct)
.post(ProductController.createProduct)
router
.route('/:id')
.get(ProductController.getProductById)
.put(ProductController.updateProduct)
.patch(ProductController.updateProduct)
.delete(ProductController.deleteProduct)

module.exports = router;