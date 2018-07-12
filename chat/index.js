const routes = require('./routes');
const socket = require('./services/socket');

module.exports = (app, io, session) => {
  app.use('/api/', routes());
  socket(io, session);
};
