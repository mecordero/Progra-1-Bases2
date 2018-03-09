
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

module.exports.insertarUniversidad = function(req, res) {
  console.log('Insertar Universidad');

  var newUniversidad = new Universidad();
  newUniversidad.nombre = req.body.nombre;

  newUniversidad.save(function(err, insertedUniversidad) {
    if (err) {
      console.log('Error insertando universidad\n' + err);
    } else {
      res.json(insertedUniversidad);
    }
  });
}
