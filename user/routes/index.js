const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers');

module.exports = () => {
  let routes = {
    get: {
      '/getUser': controller.getUser,
      '/signout': controller.signOut
    },
    post: {
      '/signup': controller.signUp,
      '/signin': controller.signIn
    }
  };

  return routeHelper(routes);
};
