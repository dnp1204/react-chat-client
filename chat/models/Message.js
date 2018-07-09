const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    sendByUser: { type: Schema.Types.ObjectId, ref: 'user' },
    userAvatar: String,
    type: { type: String, enum: ['text', 'image', 'video', 'file'] },
    content: String
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

const Message = mongoose.model('message', messageSchema);
module.exports = Message;
