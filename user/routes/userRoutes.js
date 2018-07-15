const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers/userControllers');

module.exports = () => {
  let routes = {
    get: {
      '/getUser': controller.getCurrentUser,
      '/user/:id': controller.getUser,
      '/signout': controller.signOut,
      '/system/:id': controller.getSystemSetting
    },
    post: {
      '/signup': controller.signUp,
      '/login': controller.logIn,
      '/system/:id': controller.updateSystemSetting
    }
  };

  return routeHelper(routes);
};