const winston = require('winston');
const { File, Console } = winston.transports;
const {
  combine,
  timestamp,
  prettyPrint,
  label,
  colorize,
  printf
} = winston.format;

const createLogger = labelText => {
  const logger = winston.createLogger({
    transports: [
      new File({
        filename: 'log/error.log',
        level: 'error',
        maxsize: 100 * 1024
      }),
      new File({
        filename: 'log/combined.log',
        level: 'info',
        maxsize: 100 * 1024
      })
    ],
    exitOnError: false,
    format: combine(label({ label: labelText }), timestamp(), prettyPrint())
  });

  if (process.env.NODE_ENV !== 'production') {
    logger.add(
      new Console({
        level: 'debug',
        handleExceptions: true,
        format: combine(
          colorize(),
          label({ label: labelText }),
          timestamp(),
          printf(
            info =>
              `${info.timestamp} [${info.label}] [${info.level}]: ${
                info.message
              }`
          )
        )
      })
    );
  }

  return logger;
};

module.exports = {
  logger: createLogger,
  appLogger: createLogger('app'),
  authLogger: createLogger('auth-module'),
  chatLogger: createLogger('chat-module')
};
