var express = require('express');
var router = express.Router();
var User = require('./models/User');

module.exports = function (passport) {
    router.post('/signup',function(req,res){
        var body = req.body,
        username = body.username ,
        password = body.password;
        User.findOne({username:username},function(err,doc){
            
        })
    });
    
    router.get('/login',function(req,res){
        res.send("Success");
    });
    
}