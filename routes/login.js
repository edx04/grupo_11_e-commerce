const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const validacionesLogin = require('../middlewares/validaciones/validacionesLogin');

router.get('/', loginController.index);

router.post('/', validacionesLogin, loginController.login);

module.exports = router;