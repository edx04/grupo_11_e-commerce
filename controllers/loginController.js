const controller = {
    index: (req, res)=> {
        res.render("login");
    },
    login: (req,res)=>{
        const user = JSON.stringify(req.body);
        

        //consultamos en la base de datos
        res.redirect("/");
    }
}

module.exports = controller;
