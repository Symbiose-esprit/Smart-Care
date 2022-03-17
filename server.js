/* eslint-disable no-unused-vars */
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {}).then(() => console.log('DB Connected Successfully'));

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);

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

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
