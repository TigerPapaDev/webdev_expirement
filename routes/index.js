var express = require('express');
var router = express.Router();

var User = require('../model/user');
router.get('/',function(req,res){
    res.render('index',{});
});
router.get('/login',function(req,res){
    res.render('login',{});
});
router.post('/login',function(req,res){
    var user = new User(req.body);
    user.save(function(err){
        if(err){
            return res.send(err);
        }
        res.send('user added');
        res.render('index',user);
    }) ;

});

module.exports = router;