const mongoose = require('mongoose');
const User = require('../models/users');



//DOCTOR
const DoctorSchema = new mongoose.Schema({
  specialty: {
    type: String,
    required: true,
  },
  office_address: {
    type: String,
    required: true,
  },
  office_number: {
    type: String,
    required: true,
    unique: true,
  },
  doctorate: {
    type: String,
    required: true,
  },
  consult_price: {
    type: Number,
    required: true,
  },
  coords: {
    type: String,
    required: true,
  },
  appointments: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Appointments'
  }]
});

const Doctor = User.discriminator('Doctor', DoctorSchema);
module.exports = Doctor;

