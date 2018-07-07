const Promise = require('bluebird').Promise;

const { userLogger } = require('../../utils/logger');
const User = require('../models/User');

const createUser = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.create(data);
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};

const findUserByEmail = email => {
  return new Promise(async (resolve, reject) => {
    try {
      const existingUser = await User.findOne({ email });
      resolve(existingUser);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  createUser,
  findUserByEmail
};
