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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('_client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '_client', 'build', 'index.html'));
  });
}

server.listen(app.get('port'), err => {
  if (err) {
    appLogger.error(err);
  } else {
    appLogger.debug(`Server is running on port: ${app.get('port')}`);
  }
});
