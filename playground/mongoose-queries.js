const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5abee39c455224481e77458811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
// _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// });
//
// Todo.findOne({
// _id: id
// }).then((todo) => {
//   console.log('Todo ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('Todo by id ', todo);
// }).catch((e) => console.log(e));


var userId = '5aa8feab206ebe30356464e4';

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
