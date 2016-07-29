var express = require('express');
var multer = require('multer');

var app = express();
var port = process.env.PORT || 8080;

app.get('/favicon.ico', function(req,res) {
  res.sendStatus(200);
});

app.get('/', function(req,res) {
  res.end('gnu');
});

app.listen(port);
