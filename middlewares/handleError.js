module.exports = (err, req, res, next) => {
  if (err) {
    const { message, logger, logMessage } = err;
    let { status } = err;
    if (!status) {
      status = 500;
    }
    if (logger && typeof logger === 'function') {
      logger(logMessage);
    }
    res.status(status).json({ message });
  }
  next();
};
