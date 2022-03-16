const mongoose = require('mongoose');
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
    type: Number,
    required: true,
  },
});

const Doctor = mongoose.model('Doctor', DoctorSchema);
module.exports = Doctor;
