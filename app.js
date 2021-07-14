const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/public'));

const mainRouter = require('./routers/index');
const cartRouter = require('./routers/cart');
const loginRouter = require('./routers/login');
const productRouter = require('./routers/productDetail');
const registerRouter = require('./routers/register')
const editRouter = require('./routers/editProduct');


app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/productCart', cartRouter);
app.use('/productDetail', productRouter);
app.use('/register', registerRouter);
app.use('/editProduct',editRouter);

app.listen(3000, () => {
    console.log('Servidor funcionando');
})