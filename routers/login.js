const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const validacionesLogin = require('../middlewares/validaciones/validacionesLogin');

const usuariosMiddleware = require("../middlewares/usuariosMiddleware");

router.get('/', usuariosMiddleware ,loginController.index);

router.post('/', validacionesLogin, loginController.login);

module.exports = router;