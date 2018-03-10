const express = require('express');
const router = express.Router();
const ctrlEstudiantes = require('../controllers/estudiantes')
const ctrlProfesores = require('../controllers/profesores');
const ctrlUniversidades = require('../controllers/universidades');

router.get('/', function(req, res) {
  res.send('api works');
});

//estudiantes
//router.get('/estudiantes/:carnet', ctrlEstudiantes.leerUnEstudiante);

router.get('/estudiantes', ctrlEstudiantes.getEstudiantes);


router.post('/estudiantes', ctrlEstudiantes.insertarUnEstudiante);

//profesores
//router.get('/profesores/:carnet', ctrlProfesores.leerUnProfesor);

//universidades
//router.get('/universidades', ctrlUniversidades.leerTodasUniversidades);

router.post('/universidades', ctrlUniversidades.insertarUniversidad);
module.exports = router;
