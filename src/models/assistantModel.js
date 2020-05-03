const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
      type: String,
      ref: 'Unit'
    },
    picture: {
      type: String,
      required: false
    },
    email: {
      type: String,
      require: true
    },
    knowWebsites:{
        type: Array,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now()
    },
})

module.exports = mongoose.model('Assistant', schema, 'assistant');