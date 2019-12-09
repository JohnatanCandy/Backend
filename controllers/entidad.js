const db = require("../index");

const controller = {
    createEntidad: function(req, res){
        let sql = `INSERT INTO entidad(EntidadD) VALUES('${req.body.EntidadD}')`;
        db.connection.query(sql, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error al insertar la entidad'
            });
            if(!results) return res.status(404).send({
                message: 'No se ha podido insertar la entidad'
            });
            return res.status(200).send({
                results
            });
        });
    },

    updateEntidad: function(req, res){
        let sql = `UPDATE entidad SET EntidadD = "${req.body.EntidadD}" WHERE IdEntidad = ${req.params.id}`
        db.connection.query(sql, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error al actualizar la entidad'
            });
            if(!results) return res.status(404).send({
                message: 'No se ha podido actualizar la entidad'
            });
            return res.status(200).send({
                results
            });
        });
    },

    getEntidad: function (req, res) {
        let sql = `SELECT * FROM entidad WHERE IdEntidad = ${req.params.id}`
        db.connection.query(sql, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error al obtener la entidad'
            });
            if(!results || results.length === 0)  return res.status(404).send({
                message: 'No se ha podido obtener la entidad'
            });
            return res.status(200).send(results[0]);
        });
    },

    getEntidades: function (req, res) {
        let sql = `SELECT * FROM entidad`;
        db.connection.query(sql, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error al obterner entidades'
            });
            if(!results) return res.status(404).send({
                message: 'No se ha podido obtener entidades'
            });
            return res.status(200).send(results);
        });
    },

    deleteEntidad: function(req, res) {
        let sql = `DELETE FROM entidad WHERE IdEntidad = ${req.params.id}`
        db.connection.query(sql, (err, results) => {
            if(err) return res.status(500).send({
                message: 'Error al eliminar la entidad'
            });
            if(!results) return res.status(404).send({
                message: 'No se ha podido eliminar la entidad'
            });
            return res.status(200).send({
                results
            });
        });
    }
};

module.exports = controller;
