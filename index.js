const express = require("express");
const session = require("express-session");
const app = express();
const bodyParser = require('body-parser');
const MONGO_SETTINGS = require('./mongo-settings');
const url = "mongodb://"+MONGO_SETTINGS.HOST+":"+MONGO_SETTINGS.PORT+"/"+MONGO_SETTINGS.DATABASE;
const mongoose = require('mongoose');


mongoose.connect(url);
var passport = require('passport');
var auth = require('./routes/auth')(passport);
const passportConfig = require('./passport')(passport);
// define routes here..
app.use(session({
    secret:'thesecret',
    saveUninitialized : false,
    resave : false 
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/auth',auth);

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});