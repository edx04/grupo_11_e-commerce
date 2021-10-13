function invitadosMiddleware (req,res,next){
    if (!req.session.login) {
        res.redirect("/login");
    }else{
        next();
    }   
}

module.exports = invitadosMiddleware;