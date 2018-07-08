const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers/authControllers');

module.exports = () => {
  let routes = {
    get: {
      '/getUser': controller.getUser,
      '/signout': controller.signOut
    },
    post: {
      '/signup': controller.signUp,
      '/login': controller.logIn
    }
  };

  return routeHelper(routes);
};
