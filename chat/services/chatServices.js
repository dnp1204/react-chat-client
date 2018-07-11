const Conversation = require('../models/Conversation');
const Message = require('../models/Message');
const Promise = require('bluebird').Promise;

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
              sort: { createdAt: 1 },
              limit: 10
            }
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
  const users = conversation.users.filter(userData => {
    return userData._id.toString() !== id.toString();
  });
  conversation.users = users;
  return conversation;
};

const addNewMessage = async (userId, conversationId, content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const message = await Message.create({ sendByUser: userId, content });
      await Conversation.findByIdAndUpdate(conversationId, {
        $push: { contents: message._id }
      });
      resolve(message);
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
