const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
      required: true
    },
    status:{
        type: Boolean,
        required: true,
        default: false
    },
    quantity: {
      type: Number
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now()
    },
    image: String
})

module.exports = mongoose.model('Product', schema, 'product');