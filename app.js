const express = require('express');
const morgan = require('morgan');

const AppointRouter = require('./routes/appointRoutes');
const MedRecRouter = require('./routes/medRecRoutes');
const doctorRouter = require('./routes/doctorRoutes');
const symptomRouter = require('./routes/symptomsRoutes');

const app = express();

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

app.use('/api/v1/appoint', AppointRouter);
app.use('/api/v1/medrec', MedRecRouter);
app.use('/api/v1/doctors', doctorRouter);
app.use('/api/v1/symptoms', symptomRouter);

module.exports = app;
