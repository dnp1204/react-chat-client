const { Promise } = require('bluebird');

const SystemSetting = require('../models/SystemSetting');
const User = require('../models/User');

const Conversation = require('../../chat/models/Conversation');
const ConversationSetting = require('../../chat/models/ConversationSetting');

const createUser = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const promise = await Promise.all([
        User.create(data),
        SystemSetting.create({}),
        Conversation.create({}),
        ConversationSetting.create({})
      ]);

      const [user, systemSetting, conversation, conversationSetting] = promise;
      try {
        conversation.users.push(user._id);
        conversation.setting = conversationSetting._id;
        try {
          const promise = await Promise.all([
            User.findByIdAndUpdate(user._id, {
              systemSetting: systemSetting._id,
              $push: { conversations: conversation._id }
            }),
            conversation.save()
          ]);

          resolve(promise[0]);
        } catch (err) {
          reject(err);
        }
      } catch (err) {
        reject(err);
      }
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

const findUserById = (id, deepPopulate = false) => {
  return new Promise(async (resolve, reject) => {
    try {
      let existingUser;
      if (deepPopulate) {
        existingUser = await User.findById(id).populate([
          {
            path: 'conversations',
            options: {
              sort: { updatedAt: -1 },
              limit: 15
            },
            populate: [
              {
                path: 'users'
              },
              {
                path: 'contents',
                options: {
                  sort: { createdAt: -1 },
                  limit: 1
                }
              }
            ]
          },
          {
            path: 'systemSetting'
          }
        ]);
      } else {
        existingUser = await User.findById(id);
      }
      resolve(existingUser);
    } catch (err) {
      reject(err);
    }
  });
};

const findByIdAndUpdateUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findByIdAndUpdate(id, data);
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};

const getAllFriends = id => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findById(id).populate('friends');
      resolve(user.friends);
    } catch (err) {
      reject(err);
    }
  });
};

const addFriend = (userId, friendId) => {
  return new Promise(async (resolve, reject) => {
    const conversation = new Conversation();
    const conversationSetting = new ConversationSetting();
    conversation.users.push(userId, friendId);
    conversation.setting = conversationSetting._id;
    try {
      await conversation.save();
    } catch (err) {
      reject(err);
    }
    try {
      const promise = await Promise.all([
        User.findByIdAndUpdate(userId, {
          $push: { friends: friendId, conversations: conversation._id }
        }),
        User.findByIdAndUpdate(friendId, {
          $push: { friends: userId, conversations: conversation._id }
        }),
        conversationSetting.save()
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
  findByIdAndUpdateUser,
  getAllFriends
};
