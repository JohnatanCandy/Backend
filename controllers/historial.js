const db = require("../index");

const controller = {
    createTransaccion: function(req, res){
        let sql = `INSERT INTO historial(IdBien, IdUsuario, FechaTransaccion) 
            VALUES(${req.body.IdBien}, ${req.body.IdUsuario}, "${req.body.FechaTransaccion}")`;
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
    },

    updateTransaccion: function(req, res){
        let sql = `UPDATE historial SET
            IdBien=${req.body.IdBien},
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
    },

    getTransaccion: function (req, res) {
        let sql = `SELECT NroTransaccion, UbicacionD, ClasificacionD, CI, Nombre, FechaTransaccion
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
    },

    getTransacciones: function (req, res) {
        let sql = `SELECT NroTransaccion, UbicacionD, ClasificacionD, CI, Nombre, FechaTransaccion
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
    },

    deleteTransaccion: function(req, res) {
        let sql = `DELETE FROM historial WHERE NroTransaccion = ${req.params.id}`
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
    }
};

module.exports = controller;
