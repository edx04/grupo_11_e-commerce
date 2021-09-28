const { validationResult } = require("express-validator");
const userModel = require("../models/user");
const db = require("../src/database/models");
const bcrypt = require("bcryptjs");

const controller = {
    index: (req, res) => {
        res.render("login", {
            styles: '/static/css/styles-login-register.css',
            titulo: 'Inicia sesión'
        });
    },
    login: (req, res, next) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            res.render("login", {
                errors: resultValidation.mapped(),
                oldData: req.body,
                styles: '/static/css/styles-login-register.css',
                titulo: 'Inicia Sesion'
            });
        } else {
            //consultamos en la base de datos
            // console.log(req.body);
            let login
            let error

            db.Users.findOne({
                where: {
                    email: req.body.email
                }
            }).then(user => {
                if (user) {
                    //console.log(user)
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        login = user
                    } else {
                        error = {
                            password: {
                                msg: "contraseña equivocada"
                            }
                        }
                    }

                } else {
                    error = {
                        email: {
                            msg: "correo no registrado"
                        }
                    }
                }

                //console.log(user.name)

                if (login) {
                    req.session.login = login;
                    if (req.body.recordarme) {
                        res.cookie("recordarme", login.id, {
                            maxAge: 24 * 60 * 60 * 1000,
                        })
                    }
                    res.redirect("/");
                    next();
                } else {
                    console.log(error)
                    res.render("login", {
                        errors: error,
                        oldData: req.body,
                        styles: '/static/css/styles-login-register.css',
                        titulo: 'Inicia Sesion'
                    });
                }
            })




        }
    }
}

module.exports = controller;