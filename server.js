/* eslint-disable no-unused-vars */
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
const Role = DB.role;
mongoose.connect(DB, {}).then(() => console.log('DB Connected Successfully'));

//MedicalDocs
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

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
        // eslint-disable-next-line no-shadow
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: 'moderator',
      }).save((error) => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: 'admin',
      }).save((error) => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}
require('./routes/authRoutes')(app);
require('./routes/usersRoutes')(app);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
