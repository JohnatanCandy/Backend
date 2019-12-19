const atob = require("atob");

const auth = {

    generateSQL: function (token){
        let plane = atob(token);
        let sep = plane.search(':');
        let user = plane.substring(0, sep);
        let password = plane.substring(sep+1);
        return `SELECT CI, Contrasena, TipoUsuario FROM usuario WHERE CI=${atob(user)} AND Contrasena="${password}";`;
    }

};

module.exports = auth;
