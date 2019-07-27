const express = require("express");
const app = express();

const url = 'mongodb://localhost:27017/login';
const mongoose = require('mongoose');
mongoose.connect(url);
var passport = require('passport');
var auth = require('./auth')(passport);
// define routes here..

app.use('/auth',auth);

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});