var express = require('express');
var app = express();
var request = require('request');
var ejs = require('ejs');
var bodyParser = require('body-parser');
app.use(express.static('public'));


app.get('/', function(req, res){
  var celeb = { "results": {
    "profession": "tv star",
    "known_for": ["90s sitcom", "Modern Lawyer Comedy-Drama"],
    "gender": "male",
    "first letter of first name": "m",
    "extra hint": "Time out!"
  }
}

res.json(celeb);
})

app.get('/CELEBNAME', function(req,res){
  var correct = {correct: "NICE JOB"};

  res.json(correct);
})

app.get('/:ANYTHINGELSE', function(req,res){
  var test = {incorrect: "hmm, try again"}

  res.json(test);
})

app.listen(3000);
