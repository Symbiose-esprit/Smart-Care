const express = require('express');
const DocController = require('../controllers/doctorController');

const router = express.Router();

router.route('/').get(DocController.GetAll).post(DocController.CreateDoctor);

router
  .route('/:id')
  .get(DocController.GetDoctor)
  .patch(DocController.UpdateDoctor)
  .delete(DocController.DeleteDoctor);

module.exports = router;
