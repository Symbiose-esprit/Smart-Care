const corsOptions = {
  origin: 'http://localhost:8081',
};

const dotenv = require('dotenv');
const cors = require('cors');
// const express = require('express');

// const exp = express();
const db = require('./models/index');

const Role = db.role;

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// const Role = DB.role;
app.use(cors(corsOptions));

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
        // eslint-disable-next-line no-unused-vars
      }).save((error) => {
        if (err) {
          console.log('error', err);
        }
        console.log("added 'moderator' to roles collection");
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
// mongoose.connect(DB, {}).then(() => {
//   console.log('DB Connected Successfully');
//   initial();
// });

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

// require('./routes/authRoutes')(exp);
// require('./routes/usersRoutes')(exp);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
