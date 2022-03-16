const express = require('express');
const MedRecController = require('../controllers/medRecordsController');

const router = express.Router();

router
  .route('/')
  .get(MedRecController.GetAll)
  .post(MedRecController.CreateMedRecord);

router
  .route('/:id')
  .get(MedRecController.GetMedRecord)
  .patch(MedRecController.UpdateMedRecord)
  .delete(MedRecController.DeleteMedRecord);

module.exports = router;
