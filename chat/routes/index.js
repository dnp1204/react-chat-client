const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers/chatController');
const requiredAuth = require('../../middlewares/requiredAuth');

module.exports = () => {
  let routes = {
    get: {
      '/conversation/:id': [requiredAuth, controller.getConversation],
      '/conversation-setting/:id': [
        requiredAuth,
        controller.getConversationSetting
      ]
    },
    post: {
      '/conversation-setting/:id': [
        requiredAuth,
        controller.updateConversationSetting
      ]
    }
  };

  return routeHelper(routes);
};
