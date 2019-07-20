var express = require('express');
var app = express();
const mongo = require('mongodb').MongoClient ;  
const url = 'mongodb://localhost:27017' ;  

mongo.connect(url, (err, client) => {
    if (err) {
      console.error(err)
      return
    }else {
        console.log("MongoDB connected ...");
        const db = client.db('local');
        const collection = db.collection('dogs')
        collection.insertOne({name: 'Roger'}, (err, result) => {

        })
    }   
});
// define routes here..
app.get('/',function(req,res){
    res.send("<h1>Hello Node</h1>");
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});