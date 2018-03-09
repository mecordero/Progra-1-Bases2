const mongoose = require('mongoose');
const Estudiante = mongoose.model('Estudiante');
const Universidad = require('../models/universidades');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getEstudiantes = function(req, res) {
  console.log('Get estudiantes');

  Estudiante.find({}).exec(function(err, estudiantes) {
    if (err) {
      console.log('Error fetching estudiantes');
    } else {
      res.json(estudiantes);
    }
  });
}

module.exports.leerUnEstudiante = function(req, res) {
  if (req.params && req.params.carnet) {
    Estudiante
      .findOne({
        "Carnet": parseInt(req.params.carnet)
      })
      .exec(function(err, estudiante) {
        if (!estudiante) {
          sendJsonResponse(res, 404, {
            "message": "Estudiante no encontrado"
          });
          return
        } else if (err) {
          sendJsonResponse(res, 404, err);
          return;
        }
        sendJsonResponse(res, 200, estudiante);
      });
  } else {
    sendJsonResponse(res, 404, {
      "message": "No hay carnet en la solicitud"
    });
  }
};

function getUniversityID(uName) {
  var query = Universidad.findOne({
    'nombre': uName
  }, '_id', function(err, universidad) {
    if (err) return handleError(err);
  })
  return query;
}

module.exports.insertarUnEstudiante = function(req, res) {
  console.log('Insertar Estudiante');

  var newEstudiante = new Estudiante();

  newEstudiante.nombre = req.body.nombre;
  newEstudiante.apellidos = req.body.apellidos;
  newEstudiante.carnet = Number(req.body.carnet);
  var universidad = req.body.universidad;

  var query = getUniversityID(universidad);
  query.exec(function(err, id) {
    if (err)
      return console.log(err);

    newEstudiante.universidad = id._id;
    newEstudiante.save(function(err, estudiante) {
      if (err) {
        console.log('Error insertando estudante \n' + err);
      } else {
        res.json(estudiante);
      }
    })
  });
}
