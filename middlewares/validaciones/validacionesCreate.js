const {check} = require('express-validator');

let validateCreate = [
    check('nombre').notEmpty().withMessage("Debes ingresar un nombre para el producto"),
    check('descripcion').notEmpty().withMessage("Debes ingresar una descripción del producto"),
    check('precio')
        .notEmpty().withMessage("Debes ingresar un precio")
        .isFloat({min: 0.1}).withMessage("Debes ingresar un valor positivo")

]

module.exports = validateCreate;