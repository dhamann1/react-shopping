const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/ordersController');


router.get('/products', orderCtrl.getAllProducts);
router.get('/order', orderCtrl.getOrder);

// router.post('/addproduct', orderCtrl.addProduct);


module.exports = router; 

