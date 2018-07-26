require('./services/passport');
const userRoutes = require('./routes/userRoutes');
const friendRoutes = require('./routes/friendRoutes');
const fileRoutes = require('./routes/fileRoutes');

module.exports = app => {
  app.use('/api/', userRoutes());
  app.use('/api/', friendRoutes());
  app.use('/api/', fileRoutes());
};
