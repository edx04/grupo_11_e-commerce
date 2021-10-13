const fs = require('fs');
const path = require('path');
const db = require('../src/database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
    /*** Listado de productos ***/
    index: (req, res) => {
        res.render("products", {
            styles: '/static/css/index.css',
            titulo: 'Products'
        });
    },

    /*** Formulario de creacion de productos ***/
    create: (req, res) => {
        res.render("createProduct", {
            styles: '/static/css/editProduct.css',
            titulo: 'createProduct'
        });
    },

    /*** Detalle de un producto en particular ***/
    detail: (req, res) => {
        let product
        let idProducto = req.params.id -1;
        db.Products.findByPk(req.params.id,{
            include: [{ association: "color" }, { association: "brand" }, { association: "category" }]
        }).then(user => {
            console.log(user.color.name)
            product = user
            res.render("productDetail", { product: product });
        })

       

        
    },

    /*** Acción de creación (a donde se envía el formulario) ***/
    store: (req, res) => {
        //Agregamos a la base de datos
        console.log(req.body)
        db.Colors.findOne({
            where: {
                name: req.body.color
            }
        }).then(color => {
            console.log(color.id)
            req.body.colorId= color.id
            db.Products.create({
                name:req.body.producto,
                price: req.body.precio,
                discount: req.body.descuento,
                stock: req.body.stock,
                description:req.body.descripcion,
                image: req.body.perfil,
                id_color: req.body.colorId,
                id_categories : req.body.categoria
            })
            
            })
            

        res.redirect("/products");
    },

    /*** Formulario de edición de productos ***/
    edit: (req, res) => {
        let idProducto = req.params.id - 1;
        res.render("editProduct", { productToEdit: products[idProducto] });
    },

    /*** Acción de edición (a donde se envía el formulario) ***/
    update: (req, res) => {
        //Actualizamos en la base de datos
        res.send("Producto actualizado")
    },

    /*** Acción de borrado ***/
    destroy: (req, res) => {
        //Eliminamos de la base de datos
        res.send("Producto eliminado");
    }
};

module.exports = controller;