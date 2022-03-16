const mongoose = require('mongoose');

//Medical Records
const MedRecordsSchema = new mongoose.Schema({
  timezone: {
    type: Date,
    required: true,
  },
  prev_meds: {
    type: String,
    required: true,
  },
  current_meds_number: {
    type: String,
    required: true,
  },
  disease: {
    type: String,
    required: true,
  },
  history: {
    type: String,
    enum: ['Surgical', 'Medical', 'Allergies', 'Heredetary'],
    required: true,
  },
});

const MedRecords = mongoose.model('MedRecords', MedRecordsSchema);
module.exports = MedRecords;
