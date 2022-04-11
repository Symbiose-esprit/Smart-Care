/* eslint-disable vars-on-top */
const mongoose = require('mongoose');

const emailRegex =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
//USER
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  lastname: {
    type: String,
    required: true,
    unique: true,
  },
<<<<<<< Updated upstream
  // login: {
  //   type: String,
  //   required: true,
  // },
=======
  login: {
    type: String,
    required: true,
    unique: true,
  },
>>>>>>> Stashed changes
  password: {
    type: String,
    required: true,
    minlength: [10, 'Password must contain more than 10 characters'],
  },
  email: {
    type: String,
    required: true,
    validate: function isEmailValid(email) {
      if (!email) return false;

      if (email.length > 254) return false;

      const valid = emailRegex.test(email);
      if (!valid) return false;

      // Further checking of some things regex can't handle
      const parts = email.split('@');
      if (parts[0].length > 64) return false;

      const domainParts = parts[1].split('.');
      if (domainParts.some((part) => part.length > 63)) return false;

      return true;
    },
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
<<<<<<< Updated upstream
    required: false,
=======
    required: true,
    unique: true,
>>>>>>> Stashed changes
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

 
