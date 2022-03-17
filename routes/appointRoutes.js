const express = require('express');
const AppointController = require('../controllers/appointController');

const router = express.Router();

router
  .route('/')
  .get(AppointController.GetAll)
  .post(AppointController.CreateAppointment);

router
  .route('/:id')
  .get(AppointController.GetAppoint)
  .patch(AppointController.UpdateAppointment)
  .delete(AppointController.DeleteAppointment);

module.exports = router;
