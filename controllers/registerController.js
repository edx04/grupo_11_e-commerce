const { validationResult } = require("express-validator")
const userModel = require("../models/user");

const controller = {
    index: (req, res)=> {   
        res.render("register");
    },
    register: (req,res)=>{
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            res.render("register", {errors: resultValidation.mapped(), oldData: req.body});
        } else {    
            //Guardamos en la base de datos
            req.body.imagen = req.file.filename;
            userModel.guardarUsuario(req.body);
            res.redirect("/");
        }   
    }
}

module.exports = controller;
