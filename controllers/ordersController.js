const Product = ('../models/product');
const Order = ('../models/order');


function getAllProducts(req, res){
  Product.find({}, (err,products) => res.json(products))
};


module.exports = {
  getAllProducts 
}