const db = require("../index");
const auth = require("../auth");

const controller = {
    createBien: function(req, res){
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

            let sql = `INSERT INTO bienmunicipio(IdBien, IdUbicacion, IdClasificacion, IdEstado, Responsable, Calificacion, Precio)
            VALUES("${req.body.IdBien}", ${req.body.IdUbicacion}, ${req.body.IdClasificacion}, ${req.body.IdEstado}, ${req.body.Responsable},
            "${req.body.Calificacion}", ${req.body.Precio})`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al insertar el bien'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido insertar el bien'
                });
                return res.status(200).send({
                    results
                });
            });
        });
    },

    updateBien: function(req, res){
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

            let sql = `UPDATE bienmunicipio SET
            IdUbicacion=${req.body.IdUbicacion},
            IdClasificacion=${req.body.IdClasificacion}, 
            IdEstado=${req.body.IdEstado}, 
            Responsable=${req.body.Responsable}, 
            Calificacion="${req.body.Calificacion}", 
            Precio="${req.body.Precio}"
            WHERE IdBien = "${req.params.id}"
            `;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al actualizar el bien'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido actualizar el bien'
                });
                return res.status(200).send({
                    results
                });
            });
        });
    },

    getBien: function (req, res) {
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

            let sql = `SELECT IdBien, UbicacionD, ClasificacionD, EstadoD, Responsable, Calificacion, Precio
            FROM bienmunicipio, ubicacion, clasificacion, estado
            WHERE bienmunicipio.IdUbicacion=ubicacion.IdUbicacion
                AND bienmunicipio.IdClasificacion=clasificacion.IdClasificacion
                AND bienmunicipio.IdEstado=estado.IdEstado
                AND IdBien="${req.params.id}"`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obtener el bien'
                });
                if(!results || results.length === 0) return res.status(404).send({
                    message: 'No se ha podido obtener el bien'
                });
                return res.status(200).send(results[0]);
            });
        });
    },

    getBienes: function (req, res) {
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

            let sql = `SELECT IdBien, UbicacionD, ClasificacionD, EstadoD, Responsable, Calificacion, Precio
            FROM bienmunicipio, ubicacion, clasificacion, estado
            WHERE bienmunicipio.IdUbicacion=ubicacion.IdUbicacion
                AND bienmunicipio.IdClasificacion=clasificacion.IdClasificacion
                AND bienmunicipio.IdEstado=estado.IdEstado`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obtener bienes'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido obtener bienes'
                });
                return res.status(200).send(results);
            });
        });
    },

    getBienesPorResponsable: function (req, res) {
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

            let sql = `SELECT IdBien, UbicacionD, ClasificacionD, EstadoD, Responsable, Calificacion, Precio
            FROM bienmunicipio, ubicacion, clasificacion, estado
            WHERE bienmunicipio.IdUbicacion=ubicacion.IdUbicacion
                AND bienmunicipio.IdClasificacion=clasificacion.IdClasificacion
                AND bienmunicipio.IdEstado=estado.IdEstado
                AND bienmunicipio.Responsable=${req.params.ci}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obtener bienes'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido obtener bienes'
                });
                return res.status(200).send(results);
            });
        });
    },

    deleteBien: function(req, res) {
        if (!req.headers.authorization) return res.status(500).send({
            message: 'Token no existe'
        });
        let sqlAuth = auth.generateSQL(req.headers.authorization);
        db.connection.query(sqlAuth, (err, results) => {
            if (err) return res.status(500).send({
                message: 'Error de autentificacion'
            });
            if (!results || results.length === 0) return res.status(401).send({
                message: 'Credenciales incorrectos'
            });

            let sql = `DELETE FROM bienmunicipio WHERE IdBien = "${req.params.id}"`;
            db.connection.query(sql, (err, results) => {
                if (err) return res.status(500).send({
                    message: 'Error al eliminar el bien'
                });
                if (!results) return res.status(404).send({
                    message: 'No se ha podido eliminar el bien'
                });
                return res.status(200).send({
                    results
                });
            });
        });
    }
};

module.exports = controller;
