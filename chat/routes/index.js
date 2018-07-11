const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers');

module.exports = () => {
  let routes = {
    get: {
      '/conversation/:id': controller.getConversation
    }
  };

  return routeHelper(routes);
};
