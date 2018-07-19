const { Promise } = require('bluebird');

const ConversationSetting = require('../models/ConversationSetting');

const createConversationSetting = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const conversationSetting = await ConversationSetting.create();
      resolve(conversationSetting);
    } catch (err) {
      reject(err);
    }
  });
};

const findById = id => {
  return new Promise(async (resolve, reject) => {
    try {
      const conversationSetting = await ConversationSetting.findById(id);
      resolve(conversationSetting);
    } catch (err) {
      reject(err);
    }
  });
};

const update = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await ConversationSetting.findByIdAndUpdate(id, data);
      const conversationSetting = await ConversationSetting.findById(id);
      resolve(conversationSetting);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  createConversationSetting,
  findById,
  update
};
