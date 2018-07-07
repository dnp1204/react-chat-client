const http = require('http');

const { appLogger, logger } = require('./logger');
const { PORT } = require('./utils/constants');
const app = require('./app');
const authentication = require('./authentication');

const server = http.createServer(app);

app.use('/', authentication.routes());

server.listen(app.get(PORT), err => {
  if (err) {
    appLogger.error(err);
  } else {
    appLogger.info(`Server is running on port: ${app.get(PORT)}`);
  }
});
