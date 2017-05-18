var express = require('express');
var app = express();
var greetedNames = [];
var server = app.listen(3001);

app.get('/greetings/:name', function(req, res) {
  res.send("Hello, " + req.params.name);
  greetedNames.push(req.params.name);
  console.log(req.params.name);
});
app.get('/greeted', function(req, res) {
  res.send(greetedNames);
  console.log(greetedNames);
 });
app.get('/counter/:user_name', function(req, res) {
  var user = req.params.user_name;
  var greetCounter = {};

  for (var i = 0; i < greetedNames.length; i++) {
    var userName = greetedNames[i]
    if(user===userName)
    {
      greetCounter[userName] = greetCounter[userName] ? greetCounter[userName] + 1 : 1;
    }
  }
  //res.send(greetCounter[user]);
  res.send('Hello, ' + user + " has been greeted " + greetCounter[user] + " time(s)");
  console.log(greetCounter[userName]);
  console.log(greetCounter);
});
