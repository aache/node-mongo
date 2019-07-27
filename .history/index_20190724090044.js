const express = require("express");
const app = express();
const router = express.Router() ;

const url = 'mongodb://localhost:27017/login';
const mongoose = require('mongoose');
mongoose.connect(url);
var passort = require('passport');


// define routes here..
//app.get('/signup',function(req,res){
//    res.send("Hello");
//});

router.get('/signup',function(req,res){
    res.send("Hello 1");
});

app.get('/login',function(req,res){
    res.send("Success");
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});