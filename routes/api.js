const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/ordersController');


router.get('/products', ordersController.getAllProducts
);


module.exports = router; 

