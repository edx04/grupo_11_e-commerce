const { body } = require('express-validator');
const fs = require('fs');
const fsp = require('fs').promises
const path = require('path');
const db = require('../src/database/models');
const { validationResult } = require("express-validator");
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
    /*** Listado de productos ***/
    index: (req, res) => {
        db.Products.findAll({
            include: [{ association: "color" }, { association: "brand" }, { association: "category" }]
        }).then(productos => {
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
        db.Products.findByPk(req.params.id, {
            include: [{ association: "color" }, { association: "brand" }, { association: "category" }]
        }).then(product => {
            console.log(product)
            if (product) {
                res.render("productDetail", { product, user: req.session.login === undefined ? req.session.login : req.session.login.name });
            } else {
                res.redirect("/products")
            }

        }).catch(e => {
            console.log(e)
        })
    },

    /*** Acción de creación (a donde se envía el formulario) ***/
    store: (req, res) => {
        let errores = validationResult(req);
        if(errores.errors.length>0){
            db.Brands.findAll()
            .then(brands => {
                console.log(brands)
                db.Colors.findAll().then(colors => {
                    res.render("createProduct", {
                        errors: errores.mapped(),
                        old: req.body,
                        styles: '/static/css/editProduct.css',
                        titulo: 'createProduct',
                        brands: brands,
                        colors: colors,
                        user: req.session.login === undefined ? req.session.login : req.session.login.name
                    });
                })

            })
        }
    
        else{ 
            //Agregamos a la base de datos
            console.log("Esta es la marca")
            console.log(req.body.marca)
            console.log(req.file.filename)

            if (req.file == undefined){
                req.body.perfil = "defult.png"
            }else{
                req.body.perfil = req.file.filename;
            }
            db.Colors.findOne({
                where: {
                    id: req.body.color
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
        }
    },

    /*** Formulario de edición de productos ***/
    edit: (req, res) => {
        db.Brands.findAll()
            .then(brands => {
                db.Products.findByPk(req.params.id, {
                    include: [{ association: "color" }, { association: "brand" }, { association: "category" }]
                }).then(product => {
                    req.session.productImage = product.dataValues.image;
                    if (product) {
                        db.Colors.findAll().then(colors => {
                            console.log(colors)
                            res.render("editProduct", { product: product, brands, colors, user: req.session.login === undefined ? req.session.login : req.session.login.name });
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
        let errores = validationResult(req);
        if(errores.errors.length>0){
            db.Brands.findAll()
            .then(brands => {
                db.Products.findByPk(req.params.id, {
                    include: [{ association: "color" }, { association: "brand" }, { association: "category" }]
                }).then(product => {
                    req.session.productImage = product.dataValues.image;
                    if (product) {
                        db.Colors.findAll().then(colors => {
                            console.log(colors)
                            res.render("editProduct", { product: product, brands, colors, errors: errores.mapped(),
                                old: req.body, user: req.session.login === undefined ? req.session.login : req.session.login.name });
                        })
                    } else {
                        res.redirect('/products/create')
                    }
                }).catch(e => {
                    console.log(e)
                })
            });
        }
        else{
            //Actualizamos en la base de datos
        imagenProducto = req.session.productImage;
        formulario = req.body;
        console.log("archivo mandado desde el formulario")
        console.log(imagenProducto)
        console.log(formulario.perfil)

        if (req.file == undefined) {
            formulario.perfil = imagenProducto;
            console.log("Entro en el if")
        } else {
            console.log("Entro en el else")
            formulario.perfil = req.file.filename;
            eliminarImagen(imagenProducto);
        }
        console.log("archivo mandado desde el formulario")
        console.log(formulario.perfil);
        db.Colors.findOne({
            where: {
                id: formulario.color
            }
        }).then(color => {
            formulario.colorId = color.id
            db.Products.update({
                name: formulario.producto,
                price: formulario.precio,
                discount: formulario.descuento,
                stock: formulario.stock,
                description: formulario.descripcion,
                image: formulario.perfil,
                id_color: formulario.colorId,
                id_categories: formulario.categoria,
                id_brand: formulario.marca
            },
                {
                    where: {
                        id: req.params.id
                    }
                })
            res.redirect("/products")


        }).catch(e => {
            console.log(e)
        })
        }

        


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

    search: (req, res) => {
        const { term } = req.query;
        db.Brands.findOne({
            where: {
                name: { [db.Sequelize.Op.like]: '%' + term + '%' }
            }

        }).then(brand => {
            let brandId;
            if (brand == null) {
                brandId = 0;
            }
            else {
                brandId = brand.id
            }
            db.Categories.findOne({
                where: {
                    name: { [db.Sequelize.Op.like]: '%' + term + '%' }
                }
            }).then(category => {
                let categoryId;
                if (category == null) {
                    categoryId = 0;
                }
                else {
                    categoryId = category.id;
                }
                db.Products.findAll({
                    where: {
                        [db.Sequelize.Op.or]: [
                            { description: { [db.Sequelize.Op.like]: '%' + term + '%' } },
                            { name: { [db.Sequelize.Op.like]: '%' + term + '%' } },
                            { id_brand: brandId },
                            { id_categories: categoryId }
                        ]
                    }
                }).then(productos => {
                    //console.log(productos[0])
                    res.render("products", {
                        styles: '/static/css/index.css',
                        titulo: term,
                        products: productos,
                        user: req.session.login === undefined ? req.session.login : req.session.login.name
                    });
                })
            })
        })


    }


};

function eliminarImagen(imagen) {
    fsp.unlink("./public/images/products/" + imagen)
        .then(() => {
            console.log("imagen eliminada")
        }).catch(err => {
            console.error(err)
        })
}

module.exports = controller;