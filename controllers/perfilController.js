const fs = require('fs').promises
const db = require("../src/database/models");
const multer = require("multer");
const path = require("path");


const controller = {
    index: (req, res) => {
        usuario = req.session.login;
        console.log(usuario)
        res.render("perfil", {
            styles: '/static/css/perfil.css',
            titulo: 'perfil',
            nombre: usuario.name,
            imagen: usuario.image
        });
    },

    edit: (req, res) => {
        usuario = req.session.login;
        res.render("editPerfil", {
            styles: '/static/css/perfil.css',
            titulo: 'Editar perfil',
            imagen: usuario.image,
            nombre: usuario.name,
            correo: usuario.email
        });
    },

    update: (req, res) => {
        usuario = req.session.login;
        formulario = req.body;

        if(formulario.image === ''){
            imagen = usuario.image;
        }else{
            imagen = formulario.image;
            eliminarImagen(usuario.image);
        }

        db.Users.update({
            image: imagen,
            name: formulario.name,
            email: formulario.email   
            
        },{
            where: {id:usuario.id}
        })

        req.session.login.name = formulario.name;
        req.session.login.email = formulario.email;
        req.session.login.image = imagen;
        res.redirect("/perfil");
    }
    
}

function eliminarImagen(imagen) {
    fs.unlink("./public/images/users/"+imagen)
        .then(() => {
            console.log("imagen eliminado")
        }).catch(err => {
            console.error(err)
        })
}

module.exports = controller;