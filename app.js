var express = require ('express');
var app = express ();
var fakeUsers = require ('fake-users100295')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get ('/users', function(req,res){
  res.status(200).json(fakeUsers.all());
})

app.get('/users/:id', function (req,res){
  if (Number.isInteger(parseInt(req.params.id)) && req.params.id >= 0 && fakeUsers.getById(req.params.id) != null){
    res.status(200).json(fakeUsers.getById(req.params.id));
  } else {
    res.status(404).json({message : 'INVALID ID'});
  }
})

app.post('/users', function (req,res){
  if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('surname') && req.body.hasOwnProperty('email')){
    res.status(201).json(fakeUsers.insert(req.body));
  } else {
    res.status(400).json({ message : 'ERROR!'})
  }
})

app.delete('/users/:id', function (req,res){
  if (Number.isInteger(parseInt(req.params.id)) && req.params.id >= 0 && fakeUsers.getById(req.params.id) != null){
    res.status(200).json(fakeUsers.delete(req.params.id));
  } else {
    res.status(404).json({ message : 'INVALID ID'});
  }
})

app.put('/users/:id', function (req,res){
  if (Number.isInteger(parseInt(req.params.id)) && req.params.id >= 0 && fakeUsers.getById(req.params.id) != null
      && isNaN(req.body.name) && isNaN(req.body.surname) && isNaN(req.body.email)
      && fakeUsers.modify(req.params.id,req.body) != null){
    res.status(201).json(fakeUsers.modify(req.params.id,req.body));
  } else if (fakeUsers.getById(req.params.id) == null || fakeUsers.modify(req.params.id,req.body) == null){
    res.status(404).json({message: 'INVALID ID'});
  } else {
    res.status(400).json({message: 'ERROR!'});
  }
})

app.put('/users', function(req,res){
  res.status(200).json(fakeUsers.reset());
})

module.exports = app;
app.listen(3002);
