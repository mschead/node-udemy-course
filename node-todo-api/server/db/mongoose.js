var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://database:27017/TodoApp');

module.exports = { mongoose };