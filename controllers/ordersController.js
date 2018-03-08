const Product = require('../models/product');
const Order = require('../models/order');


function getAllProducts(req, res){
  Product.find({}).then(products => res.status(200).json(products))
};

function getOrder(req, res){
  Order.findOne({}).populate('products').exec(order => {
    if (order){
      res.status(200).json(order);
    } else {
      Order.create({}, (err, order) => {
        res.status(201).json(order); 
      })
    }
  });
}

function addProduct(req, res){
 Product.findById(req.body.productId, (err, order) => {
   Order.findById(req.body.orderId, (err, order) => {
     order.products.push({product: product._id});
     order.save();
   });
   res.json(order);
 });
}

module.exports = {
  getAllProducts,
  getOrder,
  addProduct
}