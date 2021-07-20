const controller = {
    index: (req, res)=> {   
        res.render("register");
    },

    register: (req,res)=>{
        console.log(req.body);
        //se agrega a la base de datos
        res.redirect("/");
    }
}

module.exports = controller;
