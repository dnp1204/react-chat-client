const { chatLogger } = require('../../utils/logger');
const chatService = require('../services/chatServices');
const helper = require('../../utils/helper');

const getConversation = async (req, res, next) => {
  const { id } = req.params;
  try {
    const conversation = await chatService.getConversation(id);
    const removeUserIdConversation = chatService.removeCurrentUserInConversationFriends(
      conversation,
      req.user._id
    );
    res.json(removeUserIdConversation);
  } catch (err) {
    next(
      helper.createError(
        err.message,
        500,
        chatLogger.error,
        'Cannot get a conversation'
      )
    );
  }
};

module.exports = {
  getConversation
};
