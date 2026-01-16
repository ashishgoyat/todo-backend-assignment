const mongoose = require('mongoose');


// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
},{collection: 'user'});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    heading:{type:String, required:true},
    description:{type:String},
    userid:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true}
},{collection: 'todo'});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {User,Todo};