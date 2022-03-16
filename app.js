const express = require('express');
const morgan = require('morgan');

const AppintRouter = require('./routes/appointRoutes');
const MedRecRouter = require('./routes/medRecRoutes');
const doctorRouter = require('./routes/doctorRoutes');
const userRouter = require('./routes/usersRoutes');

const app = express();

// Middlewares

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
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

app.use('/api/appoint', AppintRouter);
app.use('/api/medrec', MedRecRouter);
app.use('/api/v1/doctors', doctorRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
