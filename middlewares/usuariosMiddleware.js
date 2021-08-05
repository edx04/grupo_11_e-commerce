function usuariosMiddleware (req,res,next){
    if (req.session.login) {
        res.redirect("/");
    }else{
        next();
    }   
};

module.exports = usuariosMiddleware;
