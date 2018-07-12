const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers/friendControllers');
const requiredAuth = require('../../middlewares/requiredAuth');

module.exports = () => {
  let routes = {
    get: {
      '/friends': [requiredAuth, controller.getAllFriends]
    },
    post: {
      '/friends/:id': [requiredAuth, controller.addFriend]
    }
  };

  return routeHelper(routes);
};
