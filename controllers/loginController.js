const { validationResult } = require("express-validator");
const userModel = require("../models/user");

const controller = {
    index: (req, res)=> {
        res.render("login");
    },
    login: (req,res)=>{
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            res.render("login", {errors: resultValidation.mapped(), oldData: req.body});
        } else {
            //consultamos en la base de datos
            let login = userModel.iniciarSesion(req.body);
            if (login.id) {
                req.session.login = login;
                res.redirect("/");
            } else {
                res.render("login", {errors: login, oldData: req.body});
            } 
        }
    }
}

module.exports = controller;
