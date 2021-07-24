const { check } = require("express-validator");

const validacionesRegister = [
    check("user").notEmpty().withMessage("Debes ingresar tu nombre"),
    check("password")
        .notEmpty().withMessage("Debes ingresar tu contraseña")
];

module.exports = validacionesRegister;