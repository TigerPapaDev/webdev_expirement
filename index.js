var express = require('express');

var bodyParser = require('body-parser');
var app = express();
//----templete
var swig = require('swig');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
//-----setting
app.set('static',__dirname + '/public');


//---router
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var indexRouter = require('./routes/index');
app.use('/',indexRouter);

app.listen(4000,function(){
    console.log('server start at 4000');
});