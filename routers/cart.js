var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.render('productCart', {
        styles: 'static/css/productCart.css',
        titulo: 'productCart',
        user: req.session.login === undefined ? req.session.login : req.session.login.name
    });
})

module.exports = router;