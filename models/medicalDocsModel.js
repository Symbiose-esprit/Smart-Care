const mongoose = require('mongoose');

const MedicalDocsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  dateofrelease: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const MedicalDocs = mongoose.model('MedicalDocs', MedicalDocsSchema);

module.exports = MedicalDocs;
