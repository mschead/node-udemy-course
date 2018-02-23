// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://database:27017/TodoApp', (err, client) => {
  if (err) {
    console.log(err);
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete( { completed: false }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany( { name: 'Schead' });

  db.collection('Users').findOneAndDelete( { 
    _id: new ObjectID('5a8e1b84def95e00019f715f')
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // client.close();
});
