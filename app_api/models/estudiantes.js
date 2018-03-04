var mongoose = require('mongoose');

var estudianteSchema = new mongoose.Schema({
	nombre: {type:String, required:true},
	apellidos: {type:String, required:true},
	carnet: {type:Number, required:true},
	universidad:{ type: mongoose.Schema.Types.ObjectId, required:true}
});

mongoose.model('Estudiante', estudianteSchema, 'Estudiante');