const authController = (req, res, next) => {
  res.send({ Hello: 'Buddy' });
};

module.exports = {
  authController
};
