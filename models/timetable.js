var mongoose = require('../libs/mongoose.js'),
	Schema = mongoose.Schema;

var schema = new Schema({
	id : Number,
	day: Number,
	number: Number,
	name: String,
	weektype: Number,
	auditorium: String,
	subject_code: Number,
	subject: String,
	locked: Boolean
})

exports.Timetable = mongoose.model("Timetable",schema);
