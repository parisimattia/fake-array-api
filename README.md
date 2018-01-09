# API's for fake users array

## ARRAY :

```js
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
```

## API's functions:

  - Get an user
  - Get an user by id
  - POST an user
  - DELETE an user by id
  - PUT an existent user
  - RESET users array

## ROOTS:

  - GET : /users (get users array)
  - GET : /users/:id (get an user from users array by id)
  - POST :  /users (post an user on the array)
  - DELETE : /users/:id (delete an user from users array by id)
  - PUT : /users/:id (edit an user of users array)
  - put : /users (reset users array)

## Author 
Mattia Parisi
