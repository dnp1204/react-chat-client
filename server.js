const mongoose = require('mongoose');

const config = require('./config');
const { appLogger } = require('./utils/logger');
const user = require('./user');
const chat = require('./chat');

require('./services/passport');

mongoose.Promise = require('bluebird');
mongoose.connect(
  config.mongoURI,
  err => {
    if (err) {
      appLogger.error(err);
    } else {
      appLogger.info(`Mongoose connect to ${config.mongoURI}`);
    }
  }
);

const { server, app, io } = require('./app');

user(app);
chat(io);

// io.of('/').on('connection', socket => {});

server.listen(app.get('port'), err => {
  if (err) {
    appLogger.error(err);
  } else {
    appLogger.info(`Server is running on port: ${app.get('port')}`);
  }
});
