var express = require('express');
var app = express();

// define routes here..
app.get('/',function(req,res){
    res.send("<h1>Hello Node</h1>");
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});