const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    products: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      required: true
    },
    orderDate: {
      type: Date,
      default: Date.now()
    },
    receiveOrder: {
      type: Boolean,
      default: false
    },
    receiveOrderDate: {
      type: Date,
    },
    estimatedTime: {
      type: Date
    },
    deliveryTime: {
      type: Date
    },
    distance: Number,
    price: Number
})

module.exports = mongoose.model('Ordered', schema, 'ordered');