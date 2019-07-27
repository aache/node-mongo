var express = require('express');
var router = express.Router();
var user = require('./models/User');

module.exports = function (passport) {
    router.get('/signup',function(req,res){
        console.log('sign up route');
    });
    
    router.get('/login',function(req,res){
        res.send("Success");
    });
    
}