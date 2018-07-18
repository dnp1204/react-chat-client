const { chatLogger } = require('../../utils/logger');
const chatService = require('../services/chatServices');
const conversationSettingService = require('../services/conversationSettingService');

const getConversation = async (req, res, next) => {
  const { id } = req.params;

  try {
    chatLogger.debug(`Find conversation ${id}`);
    const conversation = await chatService.getConversation(id);
    const removeUserIdConversation = chatService.removeCurrentUserInConversationFriends(
      conversation,
      req.user._id
    );
    res.json(removeUserIdConversation);
  } catch (err) {
    next(err);
  }
};

const getConversationSetting = async (req, res, next) => {
  const { id } = req.params;

  try {
    chatLogger.debug(`Find conversation setting ${id}`);
    const systemSetting = await conversationSettingService.findById(id);
    res.send(systemSetting);
  } catch (err) {
    next(err);
  }
};

const updateConversationSetting = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  try {
    chatLogger.debug(
      `Update conversation setting ${id} with value ${JSON.stringify(data)}`
    );
    const systemSetting = await conversationSettingService.update(id, data);
    res.send(systemSetting);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getConversation,
  getConversationSetting,
  updateConversationSetting
};
