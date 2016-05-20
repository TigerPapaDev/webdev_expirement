var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //verify login

  res.render('index', { title: 'Express' });
});
router.get('/vue',function(req,res){
  res.render('/vue-test')
})
module.exports = router;
