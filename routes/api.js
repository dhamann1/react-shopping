const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/ordersController');


router.get('/products', orderCtrl.getAllProducts);


module.exports = router; 

