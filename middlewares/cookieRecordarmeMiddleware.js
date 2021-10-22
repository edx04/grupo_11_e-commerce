const db = require("../src/database/models");

function cookieRecordarme (req, res, next){
    if (req.cookies.recordarme != undefined && req.session.login == undefined){
        db.Users.findOne({
            where: {
                id: req.cookies.recordarme
            }
        }).then(user => {
            req.session.login = user;
        })
    }
    next();
}

module.exports = cookieRecordarme;