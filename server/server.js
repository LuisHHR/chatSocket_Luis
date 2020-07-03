//Creando la libreria express
const express = require('express');

//Creando la libreria socket.io
const socketIO = require('socket.io');
const http = require('http')

//Creando la libreria path
const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO, comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

//Escuchando por el puerto 3000
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});