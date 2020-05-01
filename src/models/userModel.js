const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
      type: [Number],
      index: '2dsphere',
      required: false
    },
    cpf: {
      type: String,
      require: true
    },
    bornDate: {
      type: Date,
      required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now()
    },
    password: {
      type: String,
      required: true
    },
})

module.exports = mongoose.model('User', schema, 'user');