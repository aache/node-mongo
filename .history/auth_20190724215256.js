var express = require('express');
var router = express.Router();
var User = require('./models/User');

module.exports = function (passport) {
    router.post('/signup',function(req,res){
        var body = req.body,
        username = body.username ,
        password = body.password;
        User.findOne({username:username},function(err,doc){
            if(err){res.status(500).send('error occured');}
            else {
                if(doc){
                    res.status(500).send('account already exists');
                }else {
                    var record = new User({
                        username: username,  
                        password: password 
                    }); 

                }
            }
        })
    });
    
    router.get('/login',function(req,res){
        res.send("Success");
    });
    
}