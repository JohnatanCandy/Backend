const db = require("../index");
const auth = require("../auth");

const controller = {
    createTransaccion: function(req, res){
        if(!req.headers.authorization) return res.status(500).send({
            message: 'Token no existe'
        });
        let sqlAuth = auth.generateSQL(req.headers.authorization);
        db.connection.query(sqlAuth, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error de autentificacion'
            });
            if(!results || results.length === 0) return res.status(401).send({
                message: 'Credenciales incorrectos'
            });

            let sql = `INSERT INTO historial(IdBien, IdUsuario, FechaTransaccion) 
            VALUES("${req.body.IdBien}", ${req.body.IdUsuario}, "${req.body.FechaTransaccion}")`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al insertar la transaccion',
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido insertar la transaccion'
                });
                return res.status(200).send({
                    results
                });
            });
        });
    },

    updateTransaccion: function(req, res){
        if(!req.headers.authorization) return res.status(500).send({
            message: 'Token no existe'
        });
        let sqlAuth = auth.generateSQL(req.headers.authorization);
        db.connection.query(sqlAuth, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error de autentificacion'
            });
            if(!results || results.length === 0) return res.status(401).send({
                message: 'Credenciales incorrectos'
            });

            let sql = `UPDATE historial SET
            IdBien="${req.body.IdBien}",
            IdUsuario=${req.body.IdUsuario}, 
            FechaTransaccion="${req.body.FechaTransaccion}"
            WHERE NroTransaccion = ${req.params.id}
            `;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al actualizar la transaccion'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido actualizar la transaccion'
                });
                return res.status(200).send({
                    results
                });
            });
        });
    },

    getTransaccion: function (req, res) {
        if(!req.headers.authorization) return res.status(500).send({
            message: 'Token no existe'
        });
        let sqlAuth = auth.generateSQL(req.headers.authorization);
        db.connection.query(sqlAuth, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error de autentificacion'
            });
            if(!results || results.length === 0) return res.status(401).send({
                message: 'Credenciales incorrectos'
            });

            let sql = `SELECT NroTransaccion, IdBien, UbicacionD, ClasificacionD, CI, Nombre, FechaTransaccion
            FROM historial, bienmunicipio, ubicacion, clasificacion, usuario
            WHERE historial.IdBien=bienmunicipio.IdBien
                AND bienmunicipio.IdUbicacion=ubicacion.IdUbicacion
                AND bienmunicipio.IdClasificacion=clasificacion.IdClasificacion
                AND historial.IdUsuario=usuario.CI
                AND NroTransaccion=${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obtener la transaccion'
                });
                if(!results || results.length === 0) return res.status(404).send({
                    message: 'No se ha podido obtener la transaccion'
                });
                return res.status(200).send(results[0]);
            });
        });

    },

    getTransacciones: function (req, res) {
        if(!req.headers.authorization) return res.status(500).send({
            message: 'Token no existe'
        });
        let sqlAuth = auth.generateSQL(req.headers.authorization);
        db.connection.query(sqlAuth, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error de autentificacion'
            });
            if(!results || results.length === 0) return res.status(401).send({
                message: 'Credenciales incorrectos'
            });

            let sql = `SELECT NroTransaccion, historial.IdBien, UbicacionD, ClasificacionD, CI, Nombre, FechaTransaccion
            FROM historial, bienmunicipio, ubicacion, clasificacion, usuario
            WHERE historial.IdBien=bienmunicipio.IdBien
                AND bienmunicipio.IdUbicacion=ubicacion.IdUbicacion
                AND bienmunicipio.IdClasificacion=clasificacion.IdClasificacion
                AND historial.IdUsuario=usuario.CI`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obtener transacciones'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido obtener transacciones'
                });
                return res.status(200).send(results);
            });
        });
    },

    deleteTransaccion: function(req, res) {
        if(!req.headers.authorization) return res.status(500).send({
            message: 'Token no existe'
        });
        let sqlAuth = auth.generateSQL(req.headers.authorization);
        db.connection.query(sqlAuth, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error de autentificacion'
            });
            if(!results || results.length === 0) return res.status(401).send({
                message: 'Credenciales incorrectos'
            });

            let sql = `DELETE FROM historial WHERE NroTransaccion = ${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al eliminar la transaccion'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido eliminar la transaccion'
                });
                return res.status(200).send({
                    results
                });
            });
        });
    }
};

module.exports = controller;
