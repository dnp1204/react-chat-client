const mongoose = require('mongoose');

const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    users: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    contents: [{ type: Schema.Types.ObjectId, ref: 'message' }]
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

const Conversation = mongoose.model('conversation', conversationSchema);
module.exports = Conversation;
