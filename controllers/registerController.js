const { validationResult } = require("express-validator");
//const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const db = require("../src/database/models")

const controller = {
    index: (req, res) => {
        res.render("register", {
            styles: '/static/css/styles-login-register.css',
            titulo: 'Registro',
            user: undefined
        });
    },
    register: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            res.render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body,
                styles: '/static/css/styles-login-register.css',
                titulo: 'Registro',
                user: undefined
            });
        } else {
            //Guardamos en la base de datos
            console.log(req)
            try {
                req.body.image = req.file.filename;
            } catch (error) {
                req.body.image = "default.png"
            }

            req.body.password = bcrypt.hashSync(req.body.password, 10);
            delete req.body.passwordConfirm;
            //userModel.guardarUsuario(req.body);
            db.Users.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                image: req.body.image

            }).then(user => {
                console.log(user)
            })
            
            res.redirect("/login");
        }
    },
}

module.exports = controller;