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

const createActivateEmailTemplate = link => {
  return `
            <h1>Thank you for creating a new account</h1>
            <p>Please click the link below to activate your account. Thanks!</p>
            <a href=${link}>Click here to verify your email!</a>
        `;
};

module.exports = {
  createError,
  createActivateEmailTemplate
};
