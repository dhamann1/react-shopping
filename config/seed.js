require('./database');
const mongoose = require('mongoose');
const Product=require('../models/product');
const productData=require('./sample-data');


Product.remove({}).then(()=>{
  return Product.create(productData)
}).then((product)=> {
 mongoose.connection.close()
 process.exit(); 
});
