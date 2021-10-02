// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** Listado de productos ***/ 
router.get('/', productsController.index); 

/*** Formulario de creacion de productos ***/ 
router.get('/create', productsController.create); 

/*** Detalle de un producto en particular ***/
router.get('/:id', productsController.detail); 

/*** Acción de creación (a donde se envía el formulario) ***/
router.post('/create', productsController.store); 

/*** Formulario de edición de productos ***/ 
router.get('/:id/edit', productsController.edit); 

/*** Acción de edición (a donde se envía el formulario) ***/ 
router.put('/:id', productsController.update); 

/*** Acción de borrado ***/ 
router.delete('/:id', productsController.destroy); 

module.exports = router;
