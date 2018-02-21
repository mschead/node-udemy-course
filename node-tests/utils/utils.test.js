const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  
  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(3);
  
  expect(res).toBe(9).toBeA('number');
});

it('should set firstName and lastName', () => {
  var user = {location: 'Florianopolis', age: 26};
  var res = utils.setName(user, 'Marcos Schead');

  expect(res).toInclude({
    firstName: 'Marcos',
    lastName: 'Schead'
  }).toBeA('object');
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Schead'}).toNotEqual({name: 'Schead'});
//   // expect([2,3,4]).toExclude(1);

//   expect({
//     name: 'Schead',
//     age: 26,
//     location: 'Florianopolis'
//   }).toExclude({
//     age: 23
//   });

// });