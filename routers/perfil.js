const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

const perfilController = require('../controllers/perfilController');

const invitadosMiddleware = require("../middlewares/invitadosMiddleware");


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

router.get('/', invitadosMiddleware ,perfilController.index);

router.get('/editar', invitadosMiddleware ,perfilController.edit);

router.get('/pedidos', invitadosMiddleware ,perfilController.orders);

router.post('/editar', upload.single("image"), invitadosMiddleware ,perfilController.update);

router.post('/cerrar', perfilController.logout)

module.exports = router;