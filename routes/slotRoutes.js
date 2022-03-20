const express = require('express');

const slotController = require('../controllers/slotController');

const router = express.Router();

router.route('/').get(slotController.list).post(slotController.create);

router
  .route('/:id')
  .get(slotController.show)
  .patch(slotController.update)
  .delete(slotController.remove);

module.exports = router;
