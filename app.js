var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.get('/', function(req, res){
  res.send('Hello World');
});

var server = app.listen(9000, function() {
    console.log('Listening on port %d', server.address().port);
});
