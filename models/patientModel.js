const mongoose = require('mongoose');
const User = require('../models/users');

const PatientSchema = new mongoose.Schema({
  insurance: {
    type: String,
    required: true,
  },
  payment_method: {
    type: String,
    required: true,
  },
  blood_type: {
    type: String,
    required: true,
  },
  addictions: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  appointments: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Appointments'
  }],
  MedRecords:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MedRecords',
  }
});
const Patient = User.discriminator('Patient', PatientSchema);

module.exports = Patient;
