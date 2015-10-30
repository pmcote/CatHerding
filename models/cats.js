var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CatSchema = new Schema({
	age: Number,
	name: String,
	color: String,
});

module.exports = mongoose.model('cat', CatSchema);
