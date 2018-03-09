var mongoose = require('mongoose');
require('./estudiantes');
require('./profesores');
require('./universidades');

const dbURI = 'mongodb://localhost/SRA';
mongoose.Promise = global.Promise;

mongoose.connect(dbURI, function(err){
	if(err){
		console.error("Error!" + err);
	}
});
