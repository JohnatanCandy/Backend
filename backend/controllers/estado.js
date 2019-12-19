const db = require("../index");
const auth = require("../auth");

const controller = {
    createEstado: function(req, res){
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

            let sql = `INSERT INTO estado(EstadoD) VALUES('${req.body.EstadoD}')`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al insertar el estado'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido insertar el estado'
                });
                return res.status(200).send({
                    results
                });
            });
        });
    },

    updateEstado: function(req, res){
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

            let sql = `UPDATE estado SET EstadoD = "${req.body.EstadoD}" WHERE IdEstado = ${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al actualizar el estado'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido actualizar el estado'
                });
                return res.status(200).send({
                    results
                });
            });
        });

    },

    getEstado: function (req, res) {
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

            let sql = `SELECT * FROM estado WHERE IdEstado = ${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obtener el estado'
                });
                if(!results || results.length === 0)  return res.status(404).send({
                    message: 'No se ha podido obtener el estado'
                });
                return res.status(200).send(results[0]);
            });
        });

    },

    getEstados: function (req, res) {
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

            let sql = `SELECT * FROM estado`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obterner estados'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido obtener estados'
                });
                return res.status(200).send(results);
            });
        });
    },

    deleteEstado: function(req, res) {
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

            let sql = `DELETE FROM estado WHERE IdEstado = ${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al eliminar el estado'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido eliminar el estado'
                });
                return res.status(200).send({
                    results
                });
            });
        });
    }
};

module.exports = controller;
