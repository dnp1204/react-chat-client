const http = require('http');
const socket = require('socket.io');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { appLogger } = require('./utils/logger');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
if (process.env.NODE_ENV !== 'production') {
  app.use(
    morgan('combined', {
      stream: {
        write: message => {
          appLogger.info(message);
        }
      }
    })
  );
}

const server = http.createServer(app);
const io = socket(server);

module.exports = {
  server,
  io,
  app
};
