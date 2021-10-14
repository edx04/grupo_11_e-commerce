var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.render('createProduct',{
        styles: '/static/css/editProduct.css',
        titulo: 'Crear producto'
    });
})

module.exports = router;