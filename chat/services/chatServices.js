const { Promise } = require('bluebird');

const Conversation = require('../models/Conversation');
const Message = require('../models/Message');

const getConversation = conversationId => {
  return new Promise(async (resolve, reject) => {
    try {
      const conversation = await Conversation.findById(conversationId).populate(
        [
          {
            path: 'users'
          },
          {
            path: 'contents',
            options: {
              sort: { createdAt: 1 }
            },
            populate: {
              path: 'sendByUser'
            }
          },
          {
            path: 'setting'
          }
        ]
      );
      resolve(conversation);
    } catch (err) {
      reject(err);
    }
  });
};

const removeCurrentUserInConversationFriends = (conversation, id) => {
  let users = [];
  const filteredConversation = conversation;
  if (conversation.users.length > 1) {
    users = conversation.users.filter(userData => {
      return userData._id.toString() !== id.toString();
    });
    filteredConversation.users = users;
  }
  return filteredConversation;
};

const addNewMessage = async (userId, conversationId, content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const message = await Message.create({ sendByUser: userId, content });
      const promise = await Promise.all([
        Message.populate(message, { path: 'sendByUser' }),
        Conversation.findByIdAndUpdate(conversationId, {
          $push: { contents: message._id }
        })
      ]);

      resolve(promise[0]);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  addNewMessage,
  getConversation,
  removeCurrentUserInConversationFriends
};
