const routeHelper = require('../../utils/routesHelper');
const controller = require('../controllers/fileControllers');

module.exports = () => {
  const routes = {
    post: {
      '/image/upload': controller.uploadImage
    },
    delete: {
      '/image/delete/:publicId': controller.removeImage
    }
  };

  return routeHelper(routes);
};
