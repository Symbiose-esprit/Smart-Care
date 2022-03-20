const express = require('express');

const appointmentController = require('../controllers/appointmentController');

const router = express.Router();

router
  .route('/')
  .get(appointmentController.list)
  .post(appointmentController.create);

router
  .route('/:id')
  .get(appointmentController.show)
  .patch(appointmentController.update)
  .delete(appointmentController.remove);

module.exports = router;
