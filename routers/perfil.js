const express = require('express');
const router = express.Router();

const perfilController = require('../controllers/perfilController');

const invitadosMiddleware = require("../middlewares/invitadosMiddleware");

router.get('/', invitadosMiddleware ,perfilController.index);

router.get('/editar', invitadosMiddleware ,perfilController.edit);

router.post('/editar', invitadosMiddleware ,perfilController.update);

module.exports = router;