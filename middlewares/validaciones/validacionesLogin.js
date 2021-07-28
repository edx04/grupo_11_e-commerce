const { check } = require("express-validator");

const validacionesRegister = [
    check("email")
        .notEmpty().withMessage("Debes ingresar un email").bail()
        .isEmail().withMessage("Email no valido"),
    check("password")
        .notEmpty().withMessage("Debes ingresar tu contraseña")
];

module.exports = validacionesRegister;