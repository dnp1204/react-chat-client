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

const getAllFriends = id => {
  return new Promise(async (resolve, reject) => {
    try {
    } catch (err) {
      reject(err);
    }
  });
};

const addFriend = (userId, friendId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const promise = await Promise.all([
        User.findByIdAndUpdate(userId, { $push: { friends: friendId } }),
        User.findByIdAndUpdate(friendId, { $push: { friends: userId } })
      ]);
      resolve(promise[1]);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  addFriend,
  createUser,
  findUserByEmail,
  findUserById,
  getAllFriends
};
