var mongoose = require('mongoose');

var universidadSchema = new mongoose.Schema({
	nombre: {type:String, required:true}
});

module.exports = mongoose.model('Universidad', universidadSchema, 'Universidad');
