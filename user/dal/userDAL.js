const Promise = require('bluebird').Promise;

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

const findUserById = id => {
  return new Promise(async (resolve, reject) => {
    try {
      const existingUser = await User.findById(id);
      resolve(existingUser);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById
};
