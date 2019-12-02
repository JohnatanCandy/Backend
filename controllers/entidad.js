const conn = require("../index");

const controller = {
    insert: function(req, res){
        let sql = "INSERT INTO entidad(Entidad) VALUES(" + req.body.entidad + ")";
        let query = conn.query(sql, (err, results) => {
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
    }
};

module.exports = controller;
