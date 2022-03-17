const express = require('express');
const medicalDocsController = require('../controllers/medicalDocsController');

const router = express.Router();

// router.param('id', medicalDocsController.checkID);

router
  .route('/')
  .get(medicalDocsController.getMedicalDocs)
  .post(medicalDocsController.CreateMedicalDoc);

router
  .route('/:id')
  .get(medicalDocsController.getMedicalDoc)
  .patch(medicalDocsController.UpdateMedicalDoc)
  .delete(medicalDocsController.DeleteMedicalDoc);

module.exports = router;
