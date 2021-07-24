const { validationResult } = require("express-validator")

const controller = {
    index: (req, res)=> {
        res.render("login");
    },
    login: (req,res)=>{
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            res.render("login", {errors: resultValidation.mapped()});
        } else {    
            const user = JSON.stringify(req.body);
            //consultamos en la base de datos
            res.redirect("/");
        }
    }
}

module.exports = controller;
