const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB,{
  useNewUrlParser: true,
  useCreateIndex:true,
  useFindAndModify: false
})
.then(()=>console.log('DB Connected Successfully'));

const UserSchema = new mongoose.Schema({
name: { 
  type: String,
  required: true
},
lastname: {
  type: String,
  required:true
},
login: {
  type: String,
  required:true
},
password: {
  type: String,
  required:true
},
email: {
  type: String,
  required:true
},
role: {
  type: String,
  required:true
},
sex: {
  type: String,
  required:true
},
address: {
  type: String,
  required:true
},
telephone: {
  type: String,
  required:true
},
dateofbirth: {
  type: Date,
  required:true
},
age: {
  type: Number,
  required:true
},
});

const User = mongoose.model('User',UserSchema);





const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
