var mongoose = require('../libs/mongoose.js'),
		Schema=mongoose.Schema;

var schema = new Schema({
	subject_code: Number,
	name: String,
	lecturer: String
})

exports.Subjects = mongoose.model("Subject",schema);