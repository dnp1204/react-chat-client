const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const SystemSetting = require('./SystemSetting');

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
    active: { type: Boolean, default: false },
    conversations: [{ type: Schema.Types.ObjectId, ref: 'conversation' }],
    isOnline: Boolean,
    lastTimeOnline: { type: Date, default: Date.now() },
    lastPasswordReset: { type: Date, default: Date.now() },
    systemSetting: { type: Schema.Types.ObjectId, ref: 'system-setting' }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

userSchema.pre('save', function(next) {
  const user = this;

  if (!user.systemSetting) {
    SystemSetting.create({})
      .then(systemSetting => {
        user.systemSetting = systemSetting;
      })
      .catch(err => {
        next(err);
      });
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return next(err);
    }
    next(null, isMatch);
  });
};

userSchema.virtual('fullName').get(function() {
  return `${this.firstName || ''} ${this.lastName || ''}`;
});

const User = mongoose.model('user', userSchema);

module.exports = User;
