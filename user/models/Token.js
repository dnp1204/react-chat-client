const mongoose = require('mongoose');

const { Schema } = mongoose;

const tokenSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  token: { type: String, required: true },
  createdAt: {
    tupe: Date,
    required: true,
    default: Date.now(),
    expires: 7 * 24 * 60 * 60 * 1000
  }
});

const Token = mongoose.model('token', tokenSchema);
module.exports = Token;
