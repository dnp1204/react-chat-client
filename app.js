const http = require('http');
const socket = require('socket.io');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require('./config');
const { appLogger } = require('./utils/logger');

const app = express();

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
  app,
  mongoose
};
