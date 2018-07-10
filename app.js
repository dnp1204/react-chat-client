const http = require('http');
const socket = require('socket.io');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressValidator = require('express-validator');
const flash = require('express-flash');
const passport = require('passport');
const lusca = require('lusca');
const cookieSession = require('cookie-session');
const cors = require('cors');

const { appLogger } = require('./utils/logger');
const config = require('./config');
const session = new cookieSession({
  maxAge: 7 * 24 * 60 * 60 * 1000,
  keys: [config.cookieKey]
});

const app = express();
app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(lusca.xssProtection(true));
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
  session
};
