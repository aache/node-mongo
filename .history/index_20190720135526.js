var express = require('express');
var app = express();
const mongo = require('mongodb').MongoClient ;  
const url = 'mongodb://localhost:27017' ;  

// define routes here..
app.get('/',function(req,res){
    mongo.connect(url, (err, client) => {
        if (err) {
          console.error(err)
          return
        }   
    });

    res.send("<h1>Hello Node</h1>");
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});