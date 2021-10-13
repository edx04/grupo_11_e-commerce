const express = require('express');
const router = express.Router();

const perfilController = require('../controllers/perfilController');

const invitadosMiddleware = require("../middlewares/invitadosMiddleware");

router.get('/', invitadosMiddleware ,perfilController.index);

module.exports = router;