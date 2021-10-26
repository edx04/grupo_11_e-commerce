const fs = require('fs');
const path = require('path');
const db = require('../src/database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
    /*** Listado de productos ***/
    index: (req, res) => {
        db.Products.findAll({
            include: [{ association: "color" }, { association: "brand" }, { association: "category" }]
        }).then(productos => {
            //console.log(productos[0])
            res.render("products", {
                styles: '/static/css/index.css',
                titulo: 'Products',
                products: productos,
                user: req.session.login === undefined ? req.session.login : req.session.login.name
            });
        })

    },

    /*** Formulario de creacion de productos ***/
    create: (req, res) => {
        db.Brands.findAll()
            .then(brands => {
                console.log(brands)
                db.Colors.findAll().then(colors => {
                    res.render("createProduct", {
                        styles: '/static/css/editProduct.css',
                        titulo: 'createProduct',
                        brands: brands,
                        colors: colors,
                        user: req.session.login === undefined ? req.session.login : req.session.login.name
                    });
                })
                
            })
    },

    /*** Detalle de un producto en particular ***/
    detail: (req, res) => {
        db.Categories.findOne({      
            where: {
                name: req.params.category
            },
        }).then(category => {
            /*console.log(category.name)*/
            db.Products.findAll({
                where: {
                    id_categories: category.id
                },
                include: [{ association: "color" }, { association: "brand" }, { association: "category" }]
            })
            .then(products =>{
                let x = false;
                let i = 0;
                console.log(req.params.id)
                for(i=0;i<=products.length-1;i++){
                    //console.log(products[i].id);
                    if(products[i].id==req.params.id){
                        x=true;
                        /*console.log(i);*/
                        break;
                    }
                }
                
                if(x){                  
                    res.render("productDetail", { 
                        product: products[i], 
                        user: req.session.login === undefined ? req.session.login : req.session.login.name 
                    });
                }
                else{
                    res.redirect('/products');
                }
                
            }).catch(e => {
                console.log(e)
            })
        })

    },

    /*** Acción de creación (a donde se envía el formulario) ***/
    store: (req, res) => {
        //Agregamos a la base de datos
        console.log(req.body.marca)
        db.Colors.findOne({
            where: {
                name: req.body.color
            }
        }).then(color => {
            console.log(color.id)
            req.body.colorId = color.id
            db.Products.create({
                name: req.body.producto,
                price: req.body.precio,
                discount: req.body.descuento,
                stock: req.body.stock,
                description: req.body.descripcion,
                image: req.body.perfil,
                id_color: req.body.colorId,
                id_categories: req.body.categoria,
                id_brand: req.body.marca
            })

        })


        res.redirect("/products");
    },

    /*** Formulario de edición de productos ***/
    edit: (req, res) => {
        db.Brands.findAll()
            .then(brands => {
                db.Products.findByPk(req.params.id, {
                    include: [{ association: "color" }, { association: "brand" }, { association: "category" }]
                }).then(product => {
                    if (product) {
                        db.Colors.findAll().then(colors => {
                            console.log(colors)
                            res.render("editProduct", { product: product, brands, colors, user: req.session.login === undefined ? req.session.login: req.session.login.name});
                        })

                    } else {
                        res.redirect('/products/create')
                    }
                }).catch(e => {
                    console.log(e)
                })
            });
    },

    /*** Acción de edición (a donde se envía el formulario) ***/
    update: (req, res) => {
        //Actualizamos en la base de datos

        db.Colors.findOne({
            where: {
                name: req.body.color
            }
        }).then(color => {
            req.body.colorId = color.id
            db.Products.update({
                name: req.body.producto,
                price: req.body.precio,
                discount: req.body.descuento,
                stock: req.body.stock,
                description: req.body.descripcion,
                image: req.body.perfil,
                id_color: req.body.colorId,
                id_categories: req.body.categoria,
                id_brand: req.body.marca

            },
                {
                    where: {
                        id: req.params.id
                    }
                })


            res.redirect("/products/10")


        }).catch(e => {
            console.log(e)
        })


    },

    /*** Acción de borrado ***/
    destroy: (req, res) => {
        //Eliminamos de la base de datos
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })


        res.redirect("/products");
    },

    findByCategory: (req, res) => {
        db.Categories.findOne({      
            where: {
                name: req.params.category
            },
        }).then(category => {
            db.Products.findAll({
                where:{
                    id_categories: category.id
                },
                include: [{ association: "color" }, { association: "brand" }, { association: "category" }]
            }).then(products => {
                res.render("products", {
                    styles: '/static/css/index.css',
                    titulo: category.name,
                    products: products,
                    user: req.session.login === undefined ? req.session.login : req.session.login.name
                });          
            })
        }).catch(e => {
            res.redirect('/products');
            console.log(e)
        })
    }

    
};

module.exports = controller;