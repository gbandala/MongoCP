/*
app.js    API para explotar la funcionalidad de códigos postales
-----------------------------------------------------------------------------------------
Probar el código
GET
1.- Obtiene los municipios "/api/municipios"
2.- Obtiene las colonias x el nombre del municipio "/api/colonias/:mun"
    -- 'localhost:4000/api/municipios/Toluca'
3.- Obtiene las colonias x el cp "/api/colonias/cps/:CP"
    -- 'localhost:4000/api/colonias/cps/50040
4.- Obtiene toda la informacion x nombre de la colonia "/api/colonias/names/:name"
    -- 'localhost:4000/api/api/colonias/names/Electricistas Locales
-----------------------------------------------------------------------------------------
*/

//1.-Requerir librerías y drivers
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const MongoDBUrl='mongodb://gbandala:Romano#10@cluster0-shard-00-02-xv2n8.mongodb.net:27017/postales?ssl=true&authSource=admin';
const MongoDBUrl='mongodb://gbandala:Romano#10@cluster0-shard-00-02-xv2n8.mongodb.net:27017/learning_mongo?ssl=true&authSource=admin';
const CPController = require('./controllers/admin');

//2.-Configurar colección y conexión BD, web server y parsee los datos
const app = express();
const port = 4000;
app.use(bodyParser.json());

//Get municipios
app.get('/', (req, res, next) => { res.send('Por favor use /api/municipios o colonias');});
app.get('/api/ciudades',CPController.CityInq);
app.get('/api/ciudades/municipios',CPController.MunInq);
app.get('/api/ciudades/municipios/colonias/:municipio',CPController.ColInqByMun);
app.get('/api/ciudades/municipios/colonias/names/:name',CPController.ColInqByMunName);
app.get('/api/ciudades/municipios/colonias/:name/names',CPController.ColInqByName);
app.get('/api/ciudades/municipios/colonias/:cp/cp',CPController.ColInqByCP);
app.get('/api/codigos',CPController.CPInq);



//5.-Enciende web server
app.listen(port,()=>{
    console.log('Server Inicializado en el puerto: '+port);
    //definir conexion incicial, para una sola BD, cuando usas otra BD, .createConnection
    mongoose.connect(MongoDBUrl, { useNewUrlParser: true }).then(() => {
             console.log('Server mongodb Conectado...') }, err =>
             { console.log(err)});
  });


  


