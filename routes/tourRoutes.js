const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.CreateTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.UpdateTour)
  .delete(tourController.DeleteTour);

module.exports = router;
