var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index',{
        styles: '/static/css/index.css',
        titulo: 'Bienvenidos'
    });
});

module.exports = router;