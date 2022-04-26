const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const db = require('./models/index');
const app = require('./app');

const Role = db.role;


const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// initial function to create roles
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'patient',
        // eslint-disable-next-line no-shadow
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'patient' to roles collection");
      });
      new Role({
        name: 'doctor',
        // eslint-disable-next-line no-unused-vars
      }).save((error) => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'doctor' to roles collection");
      });
      new Role({
        name: 'admin',
        // eslint-disable-next-line no-unused-vars
      }).save((error) => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

// mongoDB server connection
db.mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.');
    initial();
  })
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
