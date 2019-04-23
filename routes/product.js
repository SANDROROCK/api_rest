var express = require('express');
var productRouter = express.Router();

    productRouter.get('/',function(req,res){
        res.send('Welcome in the api ,of the area products');
    });
    productRouter.get('/product',function(req,res){
        res.send('Hi!!! You are in the area of products');
    });

    module.exports = productRouter;