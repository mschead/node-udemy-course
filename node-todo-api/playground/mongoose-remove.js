const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5a92fd87613a2dfaf603d5ff'}).then((todo) => {

// });

Todo.findByIdAndRemove('5a92fd87613a2dfaf603d5ff').then((todo) => {
  console.log(todo);
});