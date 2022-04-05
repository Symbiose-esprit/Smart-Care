const mongoose = require('mongoose');

//Appointments
const AppointmentsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'PLease pick a date for your appointment!'],
  },
  category: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  type: {
    type: String,
    enum: ['New', 'Follow-up', 'Urgent'],
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
  },
  duration: {
    type: Number,
    required: true,
  },
});

const Appointments = mongoose.model('Appointments', AppointmentsSchema);

module.exports = Appointments;
