# fakeUsers.js

## Get a fake users array with functions

## Installation
```
npm install fake-users100295
```
## functions
  -all
  -byId
  -insert
  -delete
  -modify
  -reset

## Usage
You can use these functions for working on a fake users array.

```js
console.log(all()); // outputs the current array
console.log(getById(2)); // gets the element of the array with id = 2
console.log(insert(name,surname,email)); // add an element to the array giving him by input name, surname and email and adds automatically an id
console.log(delete(3)); // delete an element of the array with id = 3
console.log(modify(id,object)); // modify an element of the array by id, giving the json that contains the modifies to be made
console.log(reset()); // return to the starting array

```
## Examples
Here an example for functions insert and modify.

```js
console.log(insert('Mattia', 'Parisi', 'mattiaparisi@gmail.com'));
console.log(modify(2,{name :'Mattia',surname : 'Parisi',email : 'mattiaparisi@gmail.com'}));

```
## Author
Mattia Parisi
