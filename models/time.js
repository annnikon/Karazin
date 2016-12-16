var mongoose = require('../libs/mongoose.js'),
	Schema = mongoose.Schema;

var schema = new Schema({
	number: Number,
	start: String,
	end: String
})

exports.Time=mongoose.model("Time",schema);