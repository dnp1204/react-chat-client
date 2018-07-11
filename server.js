const mongoose = require('mongoose');

const { appLogger } = require('./utils/logger');
const chat = require('./chat');
const config = require('./config');
const user = require('./user');

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

const { server, app, io, session } = require('./app');

user(app);
chat(app, io, session);

app.use((err, req, res, next) => {
  if (err) {
    let { status, message, logger, logMessage } = err;
    if (!status) {
      status = 500;
    }
    if (logger && typeof logger === 'function') {
      logger(logMessage);
    }
    res.status(status).send({ message });
  }
  next();
});

// io.of('/').on('connection', socket => {});

server.listen(app.get('port'), err => {
  if (err) {
    appLogger.error(err);
  } else {
    appLogger.info(`Server is running on port: ${app.get('port')}`);
  }
});
