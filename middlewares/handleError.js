module.exports = (err, req, res, next) => {
  if (err) {
    let { status, message, logger, logMessage } = err;
    if (!status) {
      status = 500;
    }
    if (logger && typeof logger === 'function') {
      logger(logMessage);
    }
    res.status(status).send({ message });
  }
  next();
}