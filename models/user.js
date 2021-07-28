const fs = require("fs");

const user = {
    dataBase: "./data/users.json",

    getData: function(){
        return JSON.parse(fs.readFileSync(this.dataBase,"utf-8"));
    },

    generarId: function(){
        const usuarios = this.getData();
        const ultimo = usuarios.pop();
        if(ultimo){
            return ultimo.id + 1;
        }else{
            return 1
        }
    },
    guardarUsuario: function(nuevoUsuario){
        let usuarios = this.getData();
        let nuevo = {
            id: this.generarId(),
            ...nuevoUsuario
        }
        usuarios.push(nuevo);
        fs.writeFileSync(this.dataBase, JSON.stringify(usuarios, null, " "));
        return true;
    },
    eliminar: function(id){
        let usuarios = this.getData();
        usuarios = usuarios.filter(usuario => usuario.id !== parseInt(id));
        fs.writeFileSync(this.dataBase, JSON.stringify(usuarios, null, " "));
        return true;
    },
    iniciarSesion: function(usuario){
        let usuarios = this.getData();
        let loguin;
        let error = "";
        for (let user of usuarios) {
            if (user.email === usuario.email) {
                if (user.password === usuario.password) {
                    loguin = user;
                    break;
                }
                error = "password";
                break;
            }
        }
        if (loguin) {
            return loguin;
        } else {
            if (error === "password") {
                return {password: {
                    msg: "contraseña equivocada"
                } };
            }else{
                return {email: {
                    msg: "correo no registrado"
                } };
            }
        }
    }
}

module.exports = user;