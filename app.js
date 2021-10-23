const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieRecordarme = require("./middlewares/cookieRecordarmeMiddleware");

app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Express session
app.use(session({
    secret: "secreto",
    resave: true,
    saveUninitialized: true
}));

//Cookie parser
app.use(cookieParser())
app.use(cookieRecordarme)

app.use(express.json())

const mainRouter = require('./routers/index');
const cartRouter = require('./routers/cart');
const loginRouter = require('./routers/login');
const registerRouter = require('./routers/register');
const productsRouter = require('./routers/products');
const perfilRouter = require('./routers/perfil');
const apiRouter = require('./routers/api/index');

app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/productCart', cartRouter);
app.use('/register', registerRouter);
app.use('/products', productsRouter);
app.use('/perfil', perfilRouter);
app.use('/api',apiRouter);


app.listen(3000, () => {
    console.log('Servidor funcionando');
})