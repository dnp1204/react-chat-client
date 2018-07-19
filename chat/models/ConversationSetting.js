const mongoose = require('mongoose');

const { Schema } = mongoose;

const conversationSettingSchema = new Schema(
  {
    systemColor: { type: String, default: '#0584FF' },
    selectedEmoji: {
      id: { type: String, default: '+1' },
      native: { type: String, default: '👍' }
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

const ConversationSetting = mongoose.model(
  'conversation-setting',
  conversationSettingSchema
);
module.exports = ConversationSetting;
