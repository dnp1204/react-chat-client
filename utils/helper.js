const createError = (message, statusCode, logger, logMessage) => {
  const err = new Error();
  if (typeof message === 'object') {
    err.message = JSON.stringify(message);
  } else {
    err.message = message;
  }
  err.status = statusCode;
  err.logger = logger;
  err.logMessage = logMessage;

  return err;
};

module.exports = {
  createError
};
