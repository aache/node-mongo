const express = require("express");
const app = express();
const router = express.Router() ;

const url = 'mongodb://localhost:27017/login';
const mongoose = require('mongoose');
mongoose.connect(url);
var passort = require('passport');


// define routes here..

app.use(router);

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});