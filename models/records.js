//IMPORTS
const mongoose = require('mongoose')
const { format } = require('morgan')
const ObjectId = mongoose.Schema.Types.ObjectId
const moment = require('moment');



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
		type: String,
		default: moment().format('DD-MM-YYYY'),
		required: true
	},
	duration: {
		type: String,
		required: true
	},
	 weight: {
		type: String,
	}
})
