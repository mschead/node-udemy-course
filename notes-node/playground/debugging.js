// use: node inspect app.js
// or: node --inspect-brk app.js
// works with nodemon!

var person = {
  name: 'Schead'
};

person.age = 26;

debugger;

person.name = 'Mike';

console.log(person);