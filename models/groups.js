var mongoose = require('../libs/mongoose.js'),
	Schema = mongoose.Schema;

var schema = new Schema({
	name: String,
	year: String,
	department: String
})


exports.Groups = mongoose.model("Group",schema);