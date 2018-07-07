const passport = require('passport');
const passportLocal = require('passport-local');

const userDAL = require('../user/dal/userDAL');

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userDAL.findUserById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      console.log(email);
      try {
        const user = await userDAL.findUserByEmail(email);

        if (!user) {
          return done(null, false, { message: 'User does not exist' });
        }

        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }

          if (isMatch) {
            return done(null, user, { message: 'User found' });
          }

          return done(null, false, { message: 'Invalid email or password' });
        });
      } catch (err) {
        done(err);
      }
    }
  )
);
