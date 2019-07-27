var express = require('express');
var router = express.Router();
var User = require('../models/User');

module.exports = function (passport) {
    router.post('/signup',function(req,res){
        console.log(req.body.username);
   /*     var body = req.body,
        username = body.username ,
        password = body.password;
        console.log(username);
        console.log(password);
        User.findOne({username:username},function(err,doc){
            if(err){res.status(500).send('error occured');}
            else {
                if(doc){
                    res.status(500).send('account already exists');
                }else {
                    var record = new User();
                        record .username = username ;    
                        record .password = password ;
                        record .save(function(err,user){
                            if(err){
                                res.status(500).send("error registering user")
                            }else{
                                res.send(user)
                            }
                        });
                }
            }
        });
        */
    });
    
    router.get('/login',function(req,res){
        res.send("Success");
    });
    return router;
}