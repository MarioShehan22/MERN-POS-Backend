const express = require('express');
const productController = require('../controller/ProductController');
const verifyUser = require('../middleware/AuthMiddleware');
const router = express.Router();
router.post('/create',verifyUser, productController.create);
router.get('/find-by-id/:id',verifyUser, productController.findById);
router.delete('/delete-by-id/:id',verifyUser, productController.deleteById);
router.put('/update/:id', verifyUser, productController.update);
router.get('/find-all',verifyUser, productController.findAll);
router.get('/find-all-min',verifyUser, productController.findAllMin);
router.get('/find-all-count',verifyUser, productController.findCount);

module.exports=router;