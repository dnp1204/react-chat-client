const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true
    },
    firstName: String,
    lastName: String,
    password: { type: String, minlength: 6, required: true },
    avatarUrl: {
      type: String,
      default:
        'https://pbs.twimg.com/profile_images/833767319973212161/Ft904pMk_400x400.jpg'
    },
    friends: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    active: { type: Boolean, default: false }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

const userModal = mongoose.model('user', userSchema);

module.exports = userModal;
