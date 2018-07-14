require('./services/passport');
const userRoutes = require('./routes/userRoutes');
const friendRoutes = require('./routes/friendRoutes');

module.exports = app => {
  app.use('/api/', userRoutes());
  app.use('/api/', friendRoutes());
};
