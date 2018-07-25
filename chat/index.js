const chatRoutes = require('./routes/chatRoutes');
const socket = require('./services/socket');

module.exports = (app, io, session) => {
  app.use('/api/', chatRoutes());
  socket(io, session);
};
