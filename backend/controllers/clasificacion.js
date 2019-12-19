const db = require("../index");
const auth = require("../auth");

const controller = {
    createClasificacion: function(req, res){
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

            let sql = `INSERT INTO clasificacion(ClasificacionD) VALUES('${req.body.ClasificacionD}')`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al insertar la clasificacion'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido insertar la clasificacion'
                });
                return res.status(200).send({
                    results
                });
            });
        });

    },

    updateClasificacion: function(req, res){
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

            let sql = `UPDATE clasificacion SET ClasificacionD = "${req.body.ClasificacionD}" WHERE IdClasificacion = ${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al actualizar la clasificacion',
                });
                if(!results || results.length === 0)  return res.status(404).send({
                    message: 'No se ha podido actualizar la clasificacion'
                });
                return res.status(200).send({
                    results
                });
            });
        });
    },

    getClasificacion: function (req, res) {
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

            let sql = `SELECT * FROM clasificacion WHERE IdClasificacion = ${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obtener la clasificacion'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido obtener la clasificacion'
                });
                return res.status(200).send(results[0]);
            });
        });
    },

    getClasificaciones: function (req, res) {
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

            let sql = `SELECT * FROM clasificacion`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obtener clasificaciones'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido obtener clasificaciones'
                });
                return res.status(200).send(results);
            });
        });
    },

    deleteClasificacion: function(req, res) {
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

            let sql = `DELETE FROM clasificacion WHERE IdClasificacion = ${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al eliminar la clasificacion'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido eliminar la clasificacion'
                });
                return res.status(200).send({
                    results
                });
            });
        });
    }
};

module.exports = controller;
