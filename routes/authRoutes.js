const verifySignUp = require('../middlewares/verifySignUp');
const controller = require('../controllers/authController');

module.exports = function (app) {
  // eslint-disable-next-line prefer-arrow-callback
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });
  app.post(
    '/api/auth/signup',
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );
  app.post('/api/auth/signin', controller.signin);
};
