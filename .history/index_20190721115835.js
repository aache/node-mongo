import {Car} from './models/Car.js';
const express = require("express");
const app = express();
const mongo = require('mongodb').MongoClient ;
const url = 'mongodb://localhost:27017';
var db = null ;
var collection = null ;   
mongo.connect(url, (err, client) => {
    if (err) {
      console.error(err)
      return
    }else {
        console.log("MongoDB connected ...");
        db = client.db('local');
    }   
});
// define routes here..
app.get('/dogs',function(req,res){
    res.send("<h1>Hello Node</h1>");
    const collection = db.collection('dogs')
    collection.insertOne({name: req.query['dogName']}, (err, result) => {
    });
});

app.get('/cars',function(req,res){
    var car = new Car("Maruti","4");
    const collection = db.collection('cars')
    collection.insertOne(car, (err, result) => {
    });
    res.send("Success");
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});