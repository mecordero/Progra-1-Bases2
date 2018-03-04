var express = require ('express');
var router = express.Router();
var ctrlEstudiantes = require('../controllers/estudiantes');
var ctrlProfesores = require('../controllers/profesores');
var ctrlUniversidades = require('../controllers/universidades');

router.get('/', function(req, res){
	res.send('api works');
});

//estudiantes
router.get('/estudiantes/:carnet', ctrlEstudiantes.leerUnEstudiante);
//router.post('/estudiantes', ctrlEstudiantes.insertarUnEstudiante);

//profesores
router.get('/profesores/:carnet', ctrlProfesores.leerUnProfesor);

//universidades
router.get('/universidades', ctrlUniversidades.leerTodasUniversidades);


module.exports  = router;