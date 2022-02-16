//IMPORTS
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId



//PLANS MODEL

module.exports = mongoose.model('plans', {
	user: {
		type: ObjectId,
		ref: 'users',
		required: true
	},
	title: {
		type: String,
	},
	machines: [
		{
			type: String, 
			required: true
		}
	]
})
