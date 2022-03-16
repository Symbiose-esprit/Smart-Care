const express = require('express');
const UserController = require('../controllers/usersController');

const router = express.Router();

router.route('/').get(UserController.GetAll).post(UserController.CreateUser);

router
  .route('/:id')
  .get(UserController.GetUser)
  .patch(UserController.UpdateUser)
  .delete(UserController.DeleteUser);

module.exports = router;
