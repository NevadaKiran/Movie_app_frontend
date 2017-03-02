var express = require('express');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));

app.use(express.static('public'));



app.listen (4000, function(){
  console.log('App is Listening on Port 4000');
});
