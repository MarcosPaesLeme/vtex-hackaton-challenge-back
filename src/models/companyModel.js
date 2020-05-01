const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    fantasyName: {
        type: String,
        required: true
    },
    locations: [{
      type: Schema.Types.ObjectId,
      ref: 'Unit'
    }],
    cnpj: {
      type: String,
      require: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now()
    },
})

module.exports = mongoose.model('Company', schema, 'company');