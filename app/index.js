const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { appLogger } = require('../logger');
const { env, PORT } = require('../utils/constants');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
if (process.env.NODE_ENV !== env.PRODUCTION) {
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

app.set(PORT, process.env.PORT || 5000);

module.exports = app;
