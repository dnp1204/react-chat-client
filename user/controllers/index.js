const { createUser } = require('../dal/userDAL');
const { userLogger } = require('../../utils/logger');

const authController = async (req, res, next) => {
  const data = { email: 'test@test.com', password: '1231231' };
  try {
    const newUser = await createUser(data);
    res.send(newUser);
    userLogger.info(`Create new user with email ${newUser.email}`);
  } catch (err) {
    userLogger.error(err);
    res.status(500).send({ message: err });
  }
};

module.exports = {
  authController
};
