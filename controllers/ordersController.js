const Product = require('../models/product');
const Order = require('../models/order');


function getAllProducts(req, res){
  Product.find({}).then(products => res.json(products))
};

function getOrder (req, res){
  Order.findOne({}).populate('products').exec(order => {
    if (order){
      res.json(order);
    } else {
      Order.create({}, (err, order) => {
        res.json(order); 
      })
    }
  });
}


module.exports = {
  getAllProducts,
  getOrder
}