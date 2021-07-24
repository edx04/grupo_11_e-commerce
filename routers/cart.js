var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.render('productCart', {
        styles: 'static/css/productCart.css',
        titulo: 'productCart'
    });
})

module.exports = router;