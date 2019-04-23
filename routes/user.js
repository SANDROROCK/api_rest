var express = require('express');
var userRouter = express.Router();
var userControl = require ('../controllers/user_controller');

    userRouter.get('/',function(req,res){
        res.send('Hello Word');
    });
    userRouter.get('/user',userControl.getUser);

    module.exports = userRouter;