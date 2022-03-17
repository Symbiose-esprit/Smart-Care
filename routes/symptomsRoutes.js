const express = require('express');
const SymptomsController = require('../controllers/symptomsController');

const router = express.Router();

router
  .route('/')
  .get(SymptomsController.GetAllSymptoms)
  .post(SymptomsController.CreateSymptoms);

router
  .route('/:id')
  .get(SymptomsController.GetSymptom)
  .patch(SymptomsController.UpdateSymptom)
  .delete(SymptomsController.DeleteSymptom);

module.exports = router;
