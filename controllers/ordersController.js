const Product = require('../models/product');
const Order = require('../models/order');


function getAllProducts(req, res) {
  Product.find({}).then(products => res.status(200).json(products))
};

function getOrder(req, res) {
  Order.findOne({}).populate('products.product').exec(order => {
    if (order) {
      res.status(200).json(order);
    } else {
      Order.create({}, (err, order) => {
        res.status(201).json(order);
      })
    }
  });
}


function addProduct(req, res) {
  Product.findById(req.body.productId, (err, product) => {
    if (err) {
      console.log(err);
    } else {
      Order.findById(req.body.orderId, (err, order) => {
        let productIndex = order.products.findIndex(cartProduct => cartProduct.product.toString() === product._id.toString());
        if (productIndex !== -1) {
          order.products[productIndex].quantity += 1;
        } else {
          order.products.push({
            product: product._id,
            quantity: 1
          });
        }
        order.save((err) => {
          if (err) {
            return res.json(500, {
              error: 'Cannot save the order.'
            })
          }
          order.populate('products.product', (err, order) => {
            res.json(order);
          });
        });
      });
    }
  });
}


function removeProduct(req, res) {
  Order.findById(req.body.orderId, (err, order) => {
    if (err){
      console.log(err);
    } else {
    let productIndex = order.products.findIndex(cartProduct => cartProduct.product.toString() === req.body.productId.toString());
    if (productIndex > 1) {
      order.products[productIndex].quantity -= 1;
    } else {
      order.products.splice(productIndex, 1)
    }
    order.save((err) => {
      if (err) {
        return res.json(500, {
          error: 'Cannot save the order.'
        })
      }
      order.populate('products.product', (err, order) => {
        res.json(order);
      });
    });
  }
  });
}



module.exports = {
  getAllProducts,
  getOrder,
  addProduct,
  removeProduct
}
