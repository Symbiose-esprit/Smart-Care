const mongoose = require('mongoose');

const { Schema } = mongoose;

const slotSchema = new Schema({
  slot_time: String,
  slot_date: String,
  created_at: Date,
});

const slot = mongoose.model('slot', slotSchema);

module.exports = slot;
