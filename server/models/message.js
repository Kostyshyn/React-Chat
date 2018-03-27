var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = mongoose.Schema({
	user: {
		type: String,
		required: true		
	},
	message: {
		type: String,
		required: true		
	},
	date: {
		type: Date,
		default: Date.now
	}
});

var Message = module.exports = mongoose.model('Message', messageSchema);
