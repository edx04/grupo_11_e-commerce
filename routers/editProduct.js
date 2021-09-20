var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.render('editProduct',{
        styles: '/static/css/editProduct.css',
        titulo: 'Editar producto'
    });
})

module.exports = router;