const mongoose = require('mongoose')
const eProductSchema = mongoose.Schema({
add_category:{
    type:String,
    required: true
},
subCategory:{
    
}
})

module.exports = mongoose.model('e-product', expenceSchema);