const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server, error: ', err);
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  // console.log(result);
  //})
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').deleteMany({
    name: 'Jesse'
  }).then((result) => {
    console.log(result);
  });

  // db.collection('Users').findOneAndDelete({_id: new ObjectID('5aa7b66ba3c88815f436f1a2')}).then((result) => {
  //   console.log(result);
  // });
  //db.close();
});