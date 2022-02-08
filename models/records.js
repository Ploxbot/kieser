//IMPORTS
const mongoose = require('mongoose')

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
		type: ObjectId,
		ref: 'machines'
	},
	date: {
		type: Date,
		default: Date.now,
		required: true
	},
	duration: {
		type: Number,
		required: true
	}
})
