const passport = require('passport');
const passportLocal = require('passport-local');

const userService = require('./userService');
const { userLogger } = require('../../utils/logger');

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userService.findUserById(id, true);
    const conversations = user.conversations.map(conversation => {
      if (conversation.users.length > 1) {
        const users = conversation.users.filter(userData => {
          return userData._id.toString() !== user._id.toString();
        });
        conversation.users = users;
      }
      return conversation;
    });
    user.conversations = conversations;
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await userService.findUserByEmail(email);

        if (!user) {
          return done(null, false, { message: 'User does not exist' });
        }

        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            userLogger.error(err);
            return done(err);
          }

          if (isMatch) {
            return done(null, user, { message: 'User found' });
          }

          return done(null, false, { message: 'Invalid email or password' });
        });
      } catch (err) {
        userLogger.error(err);
        done(err);
      }
    }
  )
);
