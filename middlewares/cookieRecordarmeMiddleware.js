const userModel = require("../models/user");

function cookieRecordarme (req, res, next){
    if (req.cookies.recordarme != undefined && req.session.login == undefined){
        let usuarios = userModel.getData()
        for (let user of usuarios) {
            if (user.id == req.cookies.recordarme){
                req.session.login = user;
                break;
            }
        }
    }
    next();
}

module.exports = cookieRecordarme;
