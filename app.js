var express = require ('express');
var app = express ();
var fakeUsers = require ('fake-users100295')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get ('/users', function(req,res){
  res.json(fakeUsers.all());
})

app.get('/users/:id', function (req,res){
  res.json(fakeUsers.byId(req.params.id));
})

app.post('/users', function (req,res){
    res.json(fakeUsers.insert(req.body));
})

app.delete('/users/:id', function (req,res){
  res.json(fakeUsers.delete(req.params.id));
})

app.put('/users/:id', function (req,res){
  res.json(fakeUsers.modify(req.params.id,req.body));
})

app.put('/users', function(req,res){
  res.json(fakeUsers.reset())
})

module.exports = app;
app.listen(3002);
