const { appLogger } = require('./utils/logger');
const { server, app, io } = require('./app');
const user = require('./user');
const chat = require('./chat');

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
