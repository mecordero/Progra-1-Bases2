
var mongoose = require('mongoose');
var Universidad = mongoose.model('Universidad');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.leerTodasUniversidades = function (req, res) {
		Universidad
		    .find({})
			.exec(function(err, universidad){
				if(!universidad){
					sendJsonResponse(res, 404,{"message": "Universidad no encontrada"});
					return
				} else if (err){
					sendJsonResponse(res,404, err);
					return;
				}
				sendJsonResponse(res, 200,universidad);
			});
}