const mysql = require("mysql");
const app = require("./app");
const port = 3000;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'johnatan_candy',
    password: 'proy123soft456',
    database: 'inventario'
});

pool.getConnection( (err, cnt)  => {
    if(err) throw err;
    module.exports.connection = cnt;

    app.listen(port, () => {
        console.log("Servidor corriendo correctamente en la url: localhost:3000");
    });
});



