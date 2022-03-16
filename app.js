const express = require('express');
const morgan = require('morgan');

const app = express();

const AppointRouter = require('./routes/appointRoutes');
const MedRecRouter = require('./routes/medRecRoutes');
const doctorRouter = require('./routes/doctorRoutes');
// const userRouter = require('./routes/usersRoutes')(app);
// const authRouter = require('./routes/authRoutes')(app);

// Middlewares

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
require('./routes/usersRoutes')(app);
require('./routes/authRoutes')(app);

app.use('/appoint', AppointRouter);
app.use('/medrec', MedRecRouter);
app.use('/doctors', doctorRouter);


module.exports = app;
