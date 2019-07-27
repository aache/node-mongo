const express = require("express");
const app = express();

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
});

app.get('/cars',function(req,res){
    res.send("Success");
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});