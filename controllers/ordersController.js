const Product = require('../models/product');
const Order = require('../models/order');


function getAllProducts(req, res){
  Product.find({}).then((products) => res.json(products))
};


module.exports = {
  getAllProducts 
}