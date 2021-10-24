const db = require("../src/database/models");

const controller ={
    listDiscountProducts: (req,res)=>{
        db.Products.findAll({
            where: {
                discount:{[db.Sequelize.Op.gt]:0}
            }
        })
        .then(function(products){
            res.render('index',{
                styles: '/static/css/index.css',
                titulo: 'Bienvenidos',
                products: products,
                user: req.session.login === undefined ? req.session.login : req.session.login.name
            })
        });
    }
    
}

module.exports = controller;