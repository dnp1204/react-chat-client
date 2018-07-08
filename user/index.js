require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const friendRoutes = require('./routes/friendRoutes');

module.exports = app => {
  app.use('/api/', authRoutes());
  app.use('/api/', friendRoutes());
};
