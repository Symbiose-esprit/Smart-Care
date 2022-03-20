/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const slot = require('./slotModel');

const appointmentSchema = new Schema({
  name: String,
  email: String,
  slots: { type: mongoose.Schema.Types.ObjectId, ref: 'slot' },
  created_at: Date,
});

module.exports = mongoose.model('appointment', appointmentSchema);
