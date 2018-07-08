const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers/friendControllers');

module.exports = () => {
  let routes = {
    get: {
      '/friends': controller.getAllFriends
    },
    post: {
      '/friends/:id': controller.addFriend
    }
  };

  return routeHelper(routes);
};
