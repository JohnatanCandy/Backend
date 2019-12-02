const express = require("express");
const mysql = require("mysql");
const app = require("./app");
const port = 3000;

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'johnatan_candy',
    password: 'proy123soft456',
    database: 'inventario'
});

conn.connect( (err) => {
    if (err) throw err;
    console.log('Mysql connected...');
    app.listen(port, () => {
        console.log("Servidor corriendo correctamente en la url: localhost:3000");
    })
});

function query(callback){
    callback
}

module.exports = getConnection();



