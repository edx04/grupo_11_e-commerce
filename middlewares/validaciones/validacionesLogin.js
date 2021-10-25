const { check } = require("express-validator");

const validacionesRegister = [
    check("email")
        .notEmpty().withMessage("Debes de ingresar un email").bail()
        .isEmail().withMessage("Email no valido"),
    check("password")
        .notEmpty().withMessage("Debes de ingresar tu contraseña")
];

module.exports = validacionesRegister;