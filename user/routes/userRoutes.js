const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers/userControllers');

module.exports = () => {
  let routes = {
    get: {
      '/getUser': controller.getCurrentUser,
      '/user/:id': controller.getUser,
      '/user/validate/:email': controller.getUserByEmail,
      '/signout': controller.signOut,
    },
    post: {
      '/signup': controller.signUp,
      '/login': controller.logIn,
    },
  };

  return routeHelper(routes);
};
