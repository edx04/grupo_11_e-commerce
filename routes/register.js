const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController');
const validacionesRegister = require('../middlewares/validaciones/validacionesRegister');

router.get('/',registerController.index);

router.post('/', validacionesRegister, registerController.register);

module.exports = router;