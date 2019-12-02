const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//cargar archivos de rutas
const entidad_routes = require('./routes/entidad');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//rutas
app.use('/api', entidad_routes);

//export
module.exports = app;
