const {check} = require('express-validator');

let validateCreate = [
    check('producto').notEmpty().withMessage("Debes ingresar un nombre para el producto"),
    check('descripcion').notEmpty().withMessage("Debes ingresar una descripción del producto"),
    check('precio')
        .notEmpty().withMessage("Debes ingresar un precio").bail()
        .isFloat({min: 0.1}).withMessage("Debes ingresar un valor positivo"),
    check('descuento')
        .isNumeric("Debes ingresar un número"),
    check('categoria').notEmpty().withMessage("Selecciona una categoría"),
    check('marca').notEmpty().withMessage("Selecciona una marca"),
    check('stock')
        .notEmpty().withMessage("Ingresa el stock").bail()
        .isNumeric("Debes ingresar un número")
    

]

module.exports = validateCreate;