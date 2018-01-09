var users = [
  {
    name : 'Mattia',
    surname : 'Parisi',
    email : 'mattiaparisi@gmail.com',
    id : 0
  },
  {
    name : 'Alessia',
    surname : 'Ciccarello',
    email : 'alessiaciccarello@gmail.com',
    id : 1
  },
  {
    name : 'Ciccio',
    surname : 'Belo',
    email : 'cicciobelo@gmail.com',
    id : 2
  },
  {
    name : 'Santo',
    surname : 'Terranova',
    email : 'santoterranova@gmail.com',
    id : 3
  },
  {
    name : 'Damiano',
    surname : 'Pulvirenti',
    email : 'damianopulvirenti@gmail.com',
    id : 4
  },
  {
    name : 'Enrico',
    surname : 'Bruno',
    email : 'enricobruno@gmail.com',
    id : 5
  },
];
var resetUsers = JSON.parse(JSON.stringify(users));

this.getIndexById = function (id){
  for (var index  in users){
    var user = users[index];
    if(user.id == id){
      return index;
    }
  }
}

exports.all = function (){
  return users;
}

exports.getById = function (id){
  for (var index  in users){
    var user = users[index];
    if(user.id == id){
      return user;
    }
  }
  return null;
}

exports.insert = function (object){
  users.push(
    {
      name : object.name,
      surname : object.surname,
      email : object.email,
      id : users[users.length-1].id + 1
    }
  );
  return users;
}

exports.delete = function (id){
  var user = this.getIndexById(id);
  users.splice(user,1);
  return null;
}

exports.modify = function (id,object){
  var user = this.getById(id);
    if(object.name) {
      user.name = object.name;
    }
    if(object.surname) {
      user.surname = object.surname;
    }
    if(object.email) {
      user.email = object.email;
    }
    if (object.name == undefined && object.surname == undefined && object.email == undefined){
      return null;
    }
  return user;
}

exports.reset = function (){
  users = JSON.parse(JSON.stringify(resetUsers));
  return users;
}
