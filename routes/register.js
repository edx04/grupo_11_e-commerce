const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

//Middlewares
const registerController = require('../controllers/registerController');
const validacionesRegister = require('../middlewares/validaciones/validacionesRegister');
const usuariosMiddleware = require("../middlewares/usuariosMiddleware");

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

//Rutas
router.get('/', usuariosMiddleware ,registerController.index);

router.post('/', upload.single("imagen") , validacionesRegister, registerController.register);

module.exports = router;