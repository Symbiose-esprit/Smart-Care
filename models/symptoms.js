const mongoose = require('mongoose');

//Appointments
const SymptomsSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    required: [true, 'When did the symptoms start'],
  },
  endTime: {
    type: Date,
    required: [true, 'When did the symptoms end'],
  },
  intensity: {
    type: String,
    required: true,
  },
});

const Symptoms = mongoose.model('Symptoms', SymptomsSchema);

module.exports = Symptoms;
