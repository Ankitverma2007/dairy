const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
	companyName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	contactNumber: {
		type: Number,
		required: true
	},
	gstNo: {
		type: String,
		required: true
	},
	faxNo: {
		type: String
	},
	city: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	cityLatitude: {
		type: String,
		required: true
	},
	cityLongitude: {
		type: Number,
		required: true
	},
	deliveryShift: {
		type: Number,
		required: true
	},
})

module.exports = mongoose.model('company-profile', companySchema);