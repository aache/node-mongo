var localStrategy = require('passport-local').Strategy;
var User = require('./models/User');

module.exports  = function(passport){
    passport.serializeUser(function(user,done){
        done(null, user);
    });
    passport.deserializeUser(function(user,done){
        done(null , user);
    });

    passport.use(new localStrategy(function(username,password,done){
        console.log(username,password);
        User.findOne({username:username},function(err, doc){
            if(err){
                done(err)
            }else{
                if(doc){
                    done(null,doc)
                }else{
                    done(null,false)
                }
            }
        })
    }))

}