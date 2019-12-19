const db = require("../index");
const auth = require("../auth");
const btoa = require("btoa");
const atob = require("atob");

const controller = {

    createUsuario: function(req, res){
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

            if(results[0].TipoUsuario !== 1) return res.status(403).send({
                message: 'Acceso denegado'
            });

            let sql = `INSERT INTO usuario(CI, Nombre, Contrasena, IdEntidad, TipoUsuario) 
            VALUES(${req.body.CI}, "${req.body.Nombre}", "${req.body.Contrasena}", ${req.body.IdEntidad}, ${req.body.TipoUsuario})`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al insertar el usuario',
                    err: err
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido insertar el usuario'
                });
                return res.status(200).send({
                    results
                });
            });
        });

    },

    updateUsuario: function(req, res){
        if(!req.headers.authorization) return res.status(500).send({
                message: 'Token no exixste'
            });
        let sqlAuth = auth.generateSQL(req.headers.authorization);
        db.connection.query(sqlAuth, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error de autentificacion'
            });
            if(!results || results.length === 0) return res.status(401).send({
                    message: 'Credenciales incorrectos'
                });

            if(results[0].TipoUsuario !== 1) return res.status(403).send({
                message: 'Acceso denegado'
            });

            let sql = `UPDATE usuario SET
                            CI=${req.body.CI},
                            Nombre="${req.body.Nombre}",
                            Contrasena="${req.body.Contrasena}",
                            IdEntidad=${req.body.IdEntidad},
                            TipoUsuario=${req.body.TipoUsuario}
                            WHERE CI = ${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al actualizar el usuario'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido actualizar el usuario'
                });
                return res.status(200).send({
                    results
                });
            });
        });
    },

    getUsuario: function (req, res) {
        if(!req.headers.authorization) return res.status(500).send({
            message: 'Token no exixste'
        });
        let sqlAuth = auth.generateSQL(req.headers.authorization);
        db.connection.query(sqlAuth, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error de autentificacion'
            });
            if(!results || results.length === 0) return res.status(401).send({
                message: 'Credenciales incorrectos'
            });

            let sql = `SELECT CI, Nombre, Contrasena, EntidadD, TipoUsuario
                        FROM usuario, entidad
                        WHERE usuario.IdEntidad=entidad.IdEntidad
                        AND CI=${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obtener el usuario'
                });
                if(!results || results.length === 0)  return res.status(404).send({
                    message: 'No se ha podido obtener el usuario'
                });
                return res.status(200).send(results[0]);
            });
        });
    },

    getUsuarios: function (req, res) {
        if(!req.headers.authorization) return res.status(500).send({
            message: 'Token no exixste'
        });
        let sqlAuth = auth.generateSQL(req.headers.authorization);
        db.connection.query(sqlAuth, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error de autentificacion'
            });
            if(!results || results.length === 0) return res.status(401).send({
                message: 'Credenciales incorrectos'
            });

            let sql = `SELECT CI, Nombre, Contrasena, EntidadD, TipoUsuario
                        FROM usuario, entidad
                        WHERE usuario.IdEntidad=entidad.IdEntidad`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al obtener usuarios'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido obtener usuarios'
                });
                return res.status(200).send(results);
            });
        });
    },

    deleteUsuario: function(req, res) {
        if(!req.headers.authorization) return res.status(500).send({
            message: 'Token no exixste'
        });
        let sqlAuth = auth.generateSQL(req.headers.authorization);
        db.connection.query(sqlAuth, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error de autentificacion'
            });
            if(!results || results.length === 0) return res.status(401).send({
                message: 'Credenciales incorrectos'
            });

            if(results[0].TipoUsuario !== 1) return res.status(403).send({
                message: 'Acceso denegado'
            });

            let sql = `DELETE FROM usuario WHERE CI = ${req.params.id}`;
            db.connection.query(sql, (err, results) => {
                if(err) return res.status(500).send({
                    message: 'Error al eliminar el usuario'
                });
                if(!results) return res.status(404).send({
                    message: 'No se ha podido eliminar el usuario'
                });
                return res.status(200).send({
                    results
                });
            });
        });
    },

    getToken: function(req, res){
        let user = req.body.CI;
        let password = req.body.Contrasena;
        let sql = `SELECT CI, Contrasena FROM usuario WHERE CI=${atob(user)} AND Contrasena="${password}";`;
        db.connection.query(sql, (err, results) => {
            if(err){
                return res.status(500).send({
                    message: 'Error de conexion'
                });
            }else if(!results || results.length === 0){
                return res.status(401).send({
                    message: 'Credenciales incorrectos'
                });
            }else {
                return res.status(200).send({
                    Token: btoa(user + ":" + password)
                });
            }
        });
    }
};

module.exports = controller;
