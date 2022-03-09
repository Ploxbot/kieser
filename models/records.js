//IMPORTS
const mongoose = require('mongoose')
const { format } = require('morgan')
const ObjectId = mongoose.Schema.Types.ObjectId


//RECORDS MODEL

module.exports = mongoose.model('records', {
	user: {
		type: ObjectId,
		ref: 'users',
		required: true
	},
	// title: {
	// 	type: String,
	// 	required: true
	// },
	machine: {
		type: String,
		//ref: 'machines'
	},
	date: {
		type: Date,
		default: Date.now,
		required: true
	},
	duration: {
		type: Number,
		required: true
	},
	 weight: {
		type: String,
	}
})
