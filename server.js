const mongoose = require('mongoose');

const { appLogger } = require('./utils/logger');
const chat = require('./chat');
const config = require('./config');
const user = require('./user');
const handleError = require('./middlewares/handleError');

mongoose.Promise = require('bluebird');

mongoose.connect(
  config.mongoURI,
  { useNewUrlParser: true },
  err => {
    if (err) {
      appLogger.error(err);
    } else {
      appLogger.debug(`Mongoose connect to ${config.mongoURI}`);
    }
  }
);

const { server, app, io, session } = require('./app');

user(app);
chat(app, io, session);

app.use(handleError);

// io.of('/').on('connection', socket => {});

server.listen(app.get('port'), err => {
  if (err) {
    appLogger.error(err);
  } else {
    appLogger.debug(`Server is running on port: ${app.get('port')}`);
  }
});
