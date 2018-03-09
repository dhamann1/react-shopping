require('./database');
const mongoose = require('mongoose');
const Product = require('../models/product');
const Order = require('../models/order');
const productData = require('./sample-data');


let productSeed = Product.remove({}).then(() => {
  return Product.create(productData)
});

let orderSeed = Order.remove({}).then(() => {
  return Order.create({
    products: []
  })
});


Promise.all([productSeed, orderSeed]).then(() => {
  require('mongoose').connection.close(); 
  process.exit(); 
})
