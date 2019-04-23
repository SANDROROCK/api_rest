const express = require('express');
const app = express();


const user  = require ('./routes/user');
const product  = require ('./routes/product');


// Rotas iniciais.

app.use('/user',user);
app.use('/product',product);




module.exports = app;