var localStrategy = require('passport-local').Strategy;

module.exports  = function(passport){
    passport.serializeUser(function(user,done){

    });
    passport.deSerializeUser(function(user,done){

    })
}