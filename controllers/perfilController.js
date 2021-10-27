const fs = require('fs').promises
const db = require("../src/database/models");

const controller = {
    index: (req, res) => {

        usuario = req.session.login;
        res.render("perfil", {
            styles: '/static/css/perfil.css',
            titulo: 'perfil',
            nombre: usuario.name,
            imagen: usuario.image,
            admin: usuario.admin
        });
    },

    edit: (req, res) => {
        usuario = req.session.login;
        res.render("editPerfil", {
            styles: '/static/css/perfil.css',
            titulo: 'Editar perfil',
            imagen: usuario.image,
            nombre: usuario.name,
            correo: usuario.email,
        });
    },

    update: (req, res) => {
        usuario = req.session.login;

        if (req.file == undefined) {
            req.body.image = usuario.image
            console.log("Entro en el if")
        } else {
            console.log("Entro en el else")
            req.body.image = req.file.filename;
        }
        formulario = req.body;

        db.Users.update({
            image: formulario.image,
            name: formulario.name,
            email: formulario.email,
            
        },{
            where: {id:usuario.id}
        })

        req.session.login.name = formulario.name;
        req.session.login.email = formulario.email;
        req.session.login.image = formulario.image;
        res.redirect("/perfil");
    },

    orders: (req, res) => {
        console.log("estamos en la orders");

        
    },

    logout: (req,res) =>{
        req.session.destroy();
        res.cookie("recordarme", null, {
            maxAge: 0,
        })
        res.redirect("/")
    }
    
}

function eliminarImagen(imagen) {
    fs.unlink("./public/images/users/"+imagen)
        .then(() => {
            console.log("imagen eliminada")
        }).catch(err => {
            console.error(err)
        })
}

module.exports = controller;