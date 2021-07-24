const express=require('express');
const path=require('path');
const app=express();

const loginRouter = require('./routes/login'); // Rutas para login
const registerRouter = require('./routes/register'); // Rutas para register

app.use('/static', express.static(__dirname+'/public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Motor de plantillas
app.set('view engine', 'ejs');

//rutas para login
app.use('/login', loginRouter);

//rutas para register
app.use('/register', registerRouter);

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname+'/views/productCart.html');
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname+'/views/productDetail.html');
});

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

