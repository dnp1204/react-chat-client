const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers');

module.exports = () => {
  let routes = {
    get: {
      '/': controller.authController
    }
  };

  return routeHelper(routes);
};
