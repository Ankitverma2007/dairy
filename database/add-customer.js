const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
	avtar: {
		type: String,
		default: "../images/avtar.png"
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone1: {
		type: Number,
		required: true
	},
	phone2: {
		type: Number
	},
	address1: {
		type: String,
		required: true
	},
	address2: {
		type: String
	},
	colonyName: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	shift: {
		type: String,
		required: true
	},
	accountType: {
		type: String,
		required: true
	},
	minBalance: {
		type: Number,
		required: true
	},
	accBalance: {
		type: Number,
		required: true
	},
	cardNumberType: {
		type: String,
		required: true
	},
	block: {
		default: false
	}
})

module.exports = mongoose.model('add-customer', customerSchema);