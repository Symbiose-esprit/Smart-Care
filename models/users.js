const mongoose = require('mongoose');
const extendSchema = require('mongoose-extend-schema');

//USER
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
    },
  ],
  sex: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },

});


const User = mongoose.model('User', UserSchema);
module.exports = User;

 
