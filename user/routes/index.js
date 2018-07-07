const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers');

module.exports = () => {
  let routes = {
    post: {
      '/signUp': controller.signUp
    }
  };

  return routeHelper(routes);
};
