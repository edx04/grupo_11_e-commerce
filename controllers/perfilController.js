const fs = require('fs').promises

const controller = {
    index: (req, res) => {
        usuario = req.session.login;
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