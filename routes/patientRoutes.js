const express = require('express');
const patientController = require('../controllers/patientController');

const router = express.Router();

// router.param('id', patientController.checkID);

router
  .route('/')
  .get(patientController.getAllPatients)
  .post(patientController.CreatePatient);

router
  .route('/:id')
  .get(patientController.getPatient)
  .patch(patientController.UpdatePatient)
  .delete(patientController.DeletePatient);

module.exports = router;
