const express = require("express");
const app = express();

const url = 'mongodb://localhost:27017/login';
const mongoose = require('mongoose');
mongoose.connect(url);

// define routes here..
app.get('/dogs',function(req,res){
    res.send("<h1>Hello Node</h1>");
});

app.get('/cars',function(req,res){
    res.send("Success");
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});