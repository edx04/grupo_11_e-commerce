// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Back-end validations ************
//const validateProducts = require('../middlewares/validaciones/validacionesCreate');


//Configuración para multer
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/users")
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})
  
let upload = multer({ storage: storage })

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
router.post('/:id', upload.single("perfil"), productsController.update); 

/*** Acción de borrado ***/ 
router.delete('/:id', productsController.destroy); 

module.exports = router;