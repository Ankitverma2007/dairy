const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dairy', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const userSchema =mongoose.Schema({
	
})


module.exports = mongoose.model('dairy', userSchema);