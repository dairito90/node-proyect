var express = require('express'),
quotes = require("./package.json");

var app = express();

app.get('/',function(req, res){
  res.send("<h1>I  love   programming</hi>")

});

app.get('/blog',function(req, res){
  res.send(quotes.name);
})

app.listen(3000, function() {
  console.log("App.js is running...");
});
