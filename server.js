var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
require('./app_api/models/db');

var routesApi = require('./app_api/routes/api');

var port = 3000;

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', routesApi);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){
    console.log("Server running on localhost:"+ port);
});
