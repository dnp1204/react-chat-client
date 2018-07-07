const winston = require('winston');
const { File, Console } = winston.transports;
const { combine, timestamp, prettyPrint, label } = winston.format;

const { env } = require('../utils/constants');

const levels = {
  ERROR: 'error',
  WARN: 1,
  INFO: 'info',
  VERBOSE: 3,
  DEBUG: 'debug',
  SILLY: 5
};

const createLogger = labelText => {
  const logger = winston.createLogger({
    transports: [
      new File({ filename: 'error.log', level: levels.ERROR }),
      new File({
        filename: 'combined.log',
        level: levels.INFO
      })
    ],
    exitOnError: false
  });

  if (process.env.NODE_ENV !== env.PRODUCTION) {
    logger.add(
      new Console({
        level: 'debug',
        handleExceptions: true
      })
    );
  }

  logger.format = combine(
    label({ label: labelText }),
    timestamp(),
    prettyPrint()
  );
  return logger;
};

module.exports = {
  logger: createLogger,
  appLogger: createLogger('app'),
  authLogger: createLogger('auth')
};
