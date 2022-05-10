const { verifySignUp } = require('../middlewares');
const controller = require('../controllers/authController');
const upload = require('../middlewares/upload');

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
    '/signup',upload.single('img'),
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );
  app.post(
    '/signupatient',upload.single('img'),
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signupatient
  );
  app.post('/signin', controller.signin);
};
