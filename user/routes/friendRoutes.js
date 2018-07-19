const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers/friendControllers');
const requiredAuth = require('../../middlewares/requiredAuth');

module.exports = () => {
  const routes = {
    get: {
      '/friends': controller.getAllFriends,
      '/friend/:id': controller.getFriend
    },
    post: {
      '/friend/:id': [requiredAuth, controller.addFriend]
    }
  };

  return routeHelper(routes);
};
