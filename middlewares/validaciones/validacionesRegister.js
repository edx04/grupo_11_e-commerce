const { check } = require("express-validator");

const validacionesRegister = [
    check("name").notEmpty().withMessage("Debes ingresar tu nombre"),
    check("email")
        .notEmpty().withMessage("Debes ingresar un email").bail()
        .isEmail().withMessage("Email no valido"),
    check("password")
        .notEmpty().withMessage("Debes de ingresar una contraseña").bail()
        .isLength({ min: 8}).withMessage("La cotraseña debe de tener minimo 8 caracteres"),
    check("passwordConfirm")
        .notEmpty().withMessage("Debes de confirmar tu contraseña")
];

module.exports = validacionesRegister;