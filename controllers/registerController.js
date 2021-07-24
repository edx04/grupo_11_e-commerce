const { validationResult } = require("express-validator")

const controller = {
    index: (req, res)=> {   
        res.render("register");
    },

    register: (req,res)=>{
        const resultValidation = validationResult(req);
        console.log(resultValidation);
        if (resultValidation.errors.length > 0) {
            res.render("register", {errors: resultValidation.mapped()});
        } else {    
            res.redirect("/");
        }
    }
}

module.exports = controller;
