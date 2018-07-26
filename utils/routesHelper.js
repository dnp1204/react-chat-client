const router = require('express').Router();

const _registerRoutes = (routes, method) => {
  for (let key in routes) {
    if (
      typeof routes[key] === 'object' &&
      routes[key] !== null &&
      !(routes[key] instanceof Array)
    ) {
      _registerRoutes(routes[key], key);
    } else {
      // Register the routes
      if (method === 'get') {
        router.get(key, routes[key]);
      } else if (method === 'post') {
        router.post(key, routes[key]);
      } else if (method === 'delete') {
        router.delete(key, routes[key]);
      } else {
        router.use(routes[key]);
      }
    }
  }
};

const route = routes => {
  _registerRoutes(routes);
  return router;
};

module.exports = route;
