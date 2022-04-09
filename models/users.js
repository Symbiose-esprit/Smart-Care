const mongoose = require('mongoose');

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
  // login: {
  //   type: String,
  //   required: true,
  // },
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
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  telephone: {
    type: String,
    required: false,
  },
  dateofbirth: {
    type: Date,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },

});


const User = mongoose.model('User', UserSchema);
module.exports = User;

 
