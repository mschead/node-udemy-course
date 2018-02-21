const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
      name: 'Mike',
      age: 27
    }, {
      name: 'Schead',
      age: 26
    }, {
      name: 'Jen',
      age: 25
    }]);
});

app.listen(3000);
module.exports.app = app;