var mongoose = require('mongoose');
var Profesor = mongoose.model('Profesor');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.leerUnProfesor = function (req, res) {
	if(req.params && req.params.carnet){
		Profesor
		    .findOne({
				"Carnet": parseInt(req.params.carnet)
			})
			.exec(function(err, profesor){
				if(!profesor){
					sendJsonResponse(res, 404,{"message": "Profesor no encontrado"});
					return
				} else if (err){
					sendJsonResponse(res,404, err);
					return;
				}
				sendJsonResponse(res, 200,profesor);
			});
		}else{
			sendJsonResponse(res, 404,{"message": "No hay carnet en la solicitud"});
		}
}