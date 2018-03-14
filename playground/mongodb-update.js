const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server, error: ', err);
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5aa8e3a392b0a600a66945b2')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aa7baeeb57b7217eccf004b')
  }, {
    $set: {
      name: 'Jesse'
        }
  }, {
    $inc: {
      age: 1 
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  //db.close();
});
