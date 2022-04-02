const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const AppointRouter = require('./routes/appointRoutes');
const MedRecRouter = require('./routes/medRecRoutes');
const doctorRouter = require('./routes/doctorRoutes');
const symptomRouter = require('./routes/symptomsRoutes');
const MedicalDocsRouter = require('./routes/MedicalDocsRoutes');
const AppointmentRouter = require('./routes/appointmentRoutes');
const SlotRouter = require('./routes/slotRoutes');

const app = express();

// cors configuration
const corsOptions = {
  origin: 'http://localhost:3000',
};

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

// cors
app.use(cors(corsOptions));

// Routes
require('./routes/usersRoutes')(app);
require('./routes/authRoutes')(app);

app.use('/api/v1/appoint', AppointRouter);
app.use('/api/v1/medrec', MedRecRouter);
app.use('/api/v1/doctors', doctorRouter);
app.use('/api/v1/symptoms', symptomRouter);
app.use('/api/v1/docs', MedicalDocsRouter);
app.use('/api/v1/appointments', AppointmentRouter);
app.use('/api/v1/slots', SlotRouter);

module.exports = app;
