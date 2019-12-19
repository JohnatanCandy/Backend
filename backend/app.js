const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI =  require('swagger-ui-express');

//swagger
const swaggerOptions = {
  swaggerDefinition: {
      info: {
          title: 'Sistema informático de activos fijos - Red municipal',
          description: '',
          contact: {
              name: 'Johnatan Candy'
          },
          servers: ['http://localhost:3000']
      }
  },
    apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//cargar archivos de rutas
const bien_routes = require('./routes/bienmunicipio');
const clasificacion_routes = require('./routes/clasificacion');
const entidad_routes = require('./routes/entidad');
const estado_routes = require('./routes/estado');
const transaccion_routes = require('./routes/historial');
const ubicacion_routes = require('./routes/ubicacion');
const usuario_routes = require('./routes/usuario');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.use('', bien_routes);
app.use('', clasificacion_routes);
app.use('', entidad_routes);
app.use('', estado_routes);
app.use('', transaccion_routes);
app.use('', ubicacion_routes);
app.use('', usuario_routes);


//export
module.exports = app;
