var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/SRA';
mongoose.Promise = global.Promise;

mongoose.connect(dbURI, function(err){
	if(err){
		console.error("Error!" + err);
	}
});

require('./estudiantes');
require('./profesores');
require('./universidades');
