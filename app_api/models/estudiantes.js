var mongoose = require('mongoose');
//var Universidad = require('./universidades')

var estudianteSchema = new mongoose.Schema({
	nombre: {type:String, required:true},
	apellidos: {type:String, required:true},
	carnet: {type:Number, required:true},
	//universidad:{ type: mongoose.Schema.Types.ObjectId, ref: 'Universidad', required:true}
	universidad:{ type: mongoose.Schema.Types.ObjectId, ref: 'Universidad', required:true}
});

module.exports = mongoose.model('Estudiante', estudianteSchema, 'Estudiante');
