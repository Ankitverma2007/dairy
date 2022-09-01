const mongoose = require('mongoose')
const expenceSchema = mongoose.Schema({
  expence_head: {
    type: String
  },
  add_subcategory: [{
    subHead: String,
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    expeaceAmount: {
      type: Number,
      required: true,
      default: 0
    },
    note: {
      type: String,
      required: false,
      default: ""
    },
  }],
  })

  module.exports = mongoose.model('expence', expenceSchema);