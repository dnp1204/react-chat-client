const winston = require('winston');
const { File, Console } = winston.transports;
const { combine, timestamp, prettyPrint, label, colorize } = winston.format;

const { env } = require('../utils/constants');

const createLogger = labelText => {
  const logger = winston.createLogger({
    transports: [
      new File({ filename: 'error.log', level: 'error' }),
      new File({
        filename: 'combined.log',
        level: 'info'
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
    colorize(),
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
