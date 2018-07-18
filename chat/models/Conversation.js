const mongoose = require('mongoose');

const ConversationSetting = require('./ConversationSetting');

const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    users: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    contents: [{ type: Schema.Types.ObjectId, ref: 'message' }],
    setting: { type: Schema.Types.ObjectId, ref: 'conversation-setting' }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

conversationSchema.pre('remove', function(next) {
  ConversationSetting.findByIdAndRemove(setting, (err, result) => {
    if (err) {
      return next(err);
    }
    next();
  });
});

const Conversation = mongoose.model('conversation', conversationSchema);
module.exports = Conversation;
