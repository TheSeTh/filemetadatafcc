var express = require('express');
var multer = require('multer');

var app = express();
var port = process.env.PORT || 8080;

app.set("views", __dirname + '/views');
app.set("view engine", "pug");

var storage = multer.memoryStorage();
var upload = multer({ storage: storage, limits: { fileSize: 4194304}});

app.get('/favicon.ico', function(req,res) {
  res.sendStatus(200);
});

app.get('/', function(req,res) {
  res.render('index');
});

app.post('/upload',upload.single('fileup'), function(req,res,next) {
  if(req.file) {
    res.end(JSON.stringify(req.file.size));
  }
});

app.listen(port);
