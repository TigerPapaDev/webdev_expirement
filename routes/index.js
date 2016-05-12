var express = require('express');
var router = express.Router();
var userModel = require('');
router.get('/',function(req,res){
    res.render('index',{});
});
router.get('/login',function(req,res){
    res.render('login',{});
});
router.post('/login',function(req,res){

    res.render('index',{});
});

module.exports = router;