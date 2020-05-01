const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
      required: true
    },
    location: {
      type: [Number],
      index: '2dsphere',
      required: false
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now()
    },
})

module.exports = mongoose.model('Unit', schema, 'unit');