var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('productDetail',{
        styles: '/static/css/productDetail.css',
        titulo: 'Detalle del producto'
    });
});

module.exports = router;