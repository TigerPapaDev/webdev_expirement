var express = require('express');
var app = express();
//----templete
var swig = require('swig');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
//-----setting
app.set('static',__dirname + '/public');


//---router
var indexRouter = require('./routes/index');
app.use('/',indexRouter);

app.listen(4000,function(){
    console.log('server start at 4000');
});