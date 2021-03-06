const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
  products: [{
    product: {type: Schema.Types.ObjectId, Ref: 'Product'},
    quantity: {type: Number, default: 0}
  }]
});

module.exports = mongoose.model('Order', orderSchema); 