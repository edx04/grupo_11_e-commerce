const express=require('express');
const path=require('path');
const app=express();

app.use('/static', express.static(__dirname+'/public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname+'/views/login.html');
})

app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname+'/views/productCart.html');
})

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname+'/views/productDetail.html');
})

app.get('/register', (req,res)=>{
    res.sendFile(__dirname+'/views/register.html');
})

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
})
