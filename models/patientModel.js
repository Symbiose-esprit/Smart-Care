const mongoose = require('mongoose');

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
});
const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;
