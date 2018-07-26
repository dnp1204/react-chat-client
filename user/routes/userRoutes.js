const multer = require('multer');

const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers/userControllers');

const upload = multer();

module.exports = () => {
  const routes = {
    get: {
      '/getUser': controller.getCurrentUser,
      '/user/:id': controller.getUser,
      '/user/validate/:email': controller.getUserByEmail,
      '/signout': controller.signOut,
      '/system/:id': controller.getSystemSetting
    },
    post: {
      '/signup': controller.signUp,
      '/login': controller.logIn,
      '/system/:id': controller.updateSystemSetting,
      '/image/upload': controller.uploadImage
    }
  };

  return routeHelper(routes);
};
