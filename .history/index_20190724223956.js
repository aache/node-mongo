const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const url = 'mongodb://localhost:27017/login';
const mongoose = require('mongoose');
mongoose.connect(url);
var passport = require('passport');
var auth = require('./routes/auth')(passport);
// define routes here..
app.use(bodyParser);
app.use('/auth',auth);

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});