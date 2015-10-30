var mongoose   = require('mongoose');
var mongoURI = process.env.MONGOURI || "mongodb://localhost/cats";

mongoose.connect(mongoURI);

module.exports = mongoose.connection;
