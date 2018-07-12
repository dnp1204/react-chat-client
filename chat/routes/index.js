const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers');
const requiredAuth = require('../../middlewares/requiredAuth');

module.exports = () => {
  let routes = {
    get: {
      '/conversation/:id': [requiredAuth, controller.getConversation]
    }
  };

  return routeHelper(routes);
};
