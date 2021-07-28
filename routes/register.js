const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController');
const validacionesRegister = require('../middlewares/validaciones/validacionesRegister');

const usuariosMiddleware = require("../middlewares/usuariosMiddleware");

router.get('/', usuariosMiddleware ,registerController.index);

router.post('/', validacionesRegister, registerController.register);

module.exports = router;