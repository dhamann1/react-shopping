const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
  products: [{
    type: Schema.Types.ObjectId, Ref: "Product"
  }]
});

module.exports = mongoose.model('Order', orderSchema); 