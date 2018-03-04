var mongoose = require('mongoose');
var Estudiante = mongoose.model('Estudiante');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.leerUnEstudiante = function (req, res) {
	if(req.params && req.params.carnet){
		Estudiante
		    .findOne({
				"Carnet": parseInt(req.params.carnet)
			})
			.exec(function(err, estudiante){
				if(!estudiante){
					sendJsonResponse(res, 404,{"message": "Estudiante no encontrado"});
					return
				} else if (err){
					sendJsonResponse(res,404, err);
					return;
				}
				sendJsonResponse(res, 200,estudiante);
			});
		}else{
			sendJsonResponse(res, 404,{"message": "No hay carnet en la solicitud"});
		}
};

module.exports.insertarUnEstudiante = function(req, res){
	/*
	Estudiante.create({
		nombre: req.body.nombre,
		apellidos: req.body.apellidos,
		//carnet
		//universidad
		}, function(err, estudiante){
		if (err){
			sendJsonResponse(res,400,err);
		}else{
			sendJsonResponse(res, 201, estudiante);
		}
	});*/
}
