const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
	/*** Listado de productos ***/ 
	index: (req, res) => {
		res.send(products);
	},

    /*** Formulario de creacion de productos ***/ 
	create: (req, res) => {
		res.render("createProduct");
	},

    /*** Detalle de un producto en particular ***/
	detail: (req, res) => {
		let idProducto = req.params.id -1;
		res.render("productDetail", {product:products[idProducto], toThousand:toThousand});
	},
	
	/*** Acción de creación (a donde se envía el formulario) ***/
	store: (req, res) => {
		//Agregamos a la base de datos
		res.redirect("/products");
	},

	/*** Formulario de edición de productos ***/ 
	edit: (req, res) => {
		let idProducto = req.params.id -1;
		res.render("editProduct", {productToEdit: products[idProducto]});
	},

	/*** Acción de edición (a donde se envía el formulario) ***/ 
	update: (req, res) => {
        //Actualizamos en la base de datos
        res.send("Producto actualizado")
	},

	/*** Acción de borrado ***/
	destroy : (req, res) => {
        //Eliminamos de la base de datos
		res.send("Producto eliminado");
	}
};

module.exports = controller;