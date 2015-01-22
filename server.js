var express = require('express')
var request = require('request');

var app = express()

  var clues = {
    "profession": ["athlete", "all-around legend", "embassador"],
    "known_for": ["crazy hair", "weddings dresses", "body piercings", "carmen electra"],
    "gender": "male",
    "first letter of first name": "D",
    "extra hint": "chicago bulls"
  }

app.get('/', function(req, res){
  res.json({msg: clues});
})

app.get("/Dennis_Rodman", function (req, res){
  var celeb = "/Dennis_Rodman";
  var msg1 = "You are correct!!!";

  res.send({correct: msg1});
})

app.get("/:anything", function (req, res){
  var msg2 = "You are WRONG!!!!!!!";
  var any = req.params.anything;
  res.send({incorrect: msg2});
})

app.listen(3000);
//
//   request(clues, function(error, response, body){
//     data = JSON.parse(body)
//     res.send(data);
//     console.log(data);
//   })
//   response.render('index.ejs', {clues: clues}); //the second "items" must be defined within scope. like sending locals, but you dont use the local var. just send it the hash
//
// });


// app.get("/", function (req, res) {
//
//   var clues = {
//     "profession": ["athlete", "all-around legend", "embassador"],
//     "known_for": ["crazy hair", "weddings dresses", "body piercings", "carmen electra"],
//     "gender": "male",
//     "first letter of first name": "D",
//     "extra hint": "chicago bulls"
//   }
//
//   res.render('index.ejs', {clues: clues}); //the second "items" must be defined within scope. like sending locals, but you dont use the local var. just send it the hash
//
// })


//
// var server = app.listen(3000, function () {
//
//   var host = server.address().address
//   var port = server.address().port
//
//   console.log('Example app listening at http://%s:%s', host, port)
//
// })
