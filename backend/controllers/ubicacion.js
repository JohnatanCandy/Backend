const db = require("../index");
const auth = require("../auth");

const controller = {
    createUbicacion: function(req, res){
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

            let sql = `INSERT INTO ubicacion(UbicacionD) VALUES('${req.body.UbicacionD}')`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al insertar la ubicacion'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido insertar la ubicacion'
                });
                return res.status(200).send({
                    results
                });
            });
        });

    },

    updateUbicacion: function(req, res){
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

            let sql = `UPDATE ubicacion SET UbicacionD = "${req.body.UbicacionD}" WHERE IdUbicacion = ${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al actualizar la ubicacion'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido actualizar la ubicacion'
                });
                return res.status(200).send({
                    results
                });
            });
        });

    },

    getUbicacion: function (req, res) {
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

            let sql = `SELECT * FROM ubicacion WHERE IdUbicacion = ${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obtener la ubicacion'
                });
                if(!results || results.length === 0)  return res.status(404).send({
                    message: 'No se ha podido obtener la ubicacion'
                });
                return res.status(200).send(results[0]);
            });
        });

    },

    getUbicaciones: function (req, res) {
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

            let sql = `SELECT * FROM ubicacion`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obterner ubicaciones'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido obtener ubicaciones'
                });
                return res.status(200).send(results);
            });
        });

    },

    deleteUbicacion: function(req, res) {
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

            let sql = `DELETE FROM ubicacion WHERE IdUbicacion = ${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al eliminar la ubicacion'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido eliminar la ubicacion'
                });
                return res.status(200).send({
                    results
                });
            });
        });

    }
};

module.exports = controller;
