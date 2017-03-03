var express = require('express');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));

app.use(express.static('public'));



app.listen(process.env.PORT || 4000, function() {
  console.log(`listening on 4000`)
});
