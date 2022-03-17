const { authJwt } = require('../middlewares');
const controller = require('../controllers/usersController');

module.exports = function (app) {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });
  app.get('/test/all', controller.allAccess);
  app.get('/test/user', [authJwt.verifyToken], controller.userBoard);
  app.get(
    '/test/mod',
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
  app.get(
    '/test/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};

// /* eslint-disable prefer-arrow-callback */
// const express = require('express');
// const UserController = require('../controllers/usersController');
// const authJwt = require('../middlewares/authJwt');

// const router = express.Router();
// module.exports = function (app) {
//   app.use(function (req, res, next) {
//     res.header(
//       'Access-Control-Allow-Headers',
//       'x-access-token, Origin, Content-Type, Accept'
//     );
//     next();
//   });
//   app.get('/api/test/all', UserController.allAccess);
//   app.get('/api/test/user', [authJwt.verifyToken], UserController.userBoard);
//   app.get(
//     '/api/test/mod',
//     [authJwt.verifyToken, authJwt.isModerator],
//     UserController.moderatorBoard
//   );
//   app.get(
//     '/api/test/admin',
//     [authJwt.verifyToken, authJwt.isAdmin],
//     UserController.adminBoard
//   );
// };
// router.route('/').get(UserController.GetAll).post(UserController.CreateUser);

// router
//   .route('/:id')
//   .get(UserController.GetUser)
//   .patch(UserController.UpdateUser)
//   .delete(UserController.DeleteUser);

// module.exports = router;
