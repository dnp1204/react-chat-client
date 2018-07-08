const passport = require('passport');
const { createUser, findUserByEmail } = require('../services/userService');
const { userLogger } = require('../../utils/logger');

const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  req.assert('email', 'You must provide valid email').isEmail();
  req
    .assert(
      'password',
      'You must provide password that must be at least 6 characters long'
    )
    .len({ min: 6 });
  req
    .assert('confirmationPassword', 'Confirmation password does not match')
    .equals(password);
  req.sanitize('email').normalizeEmail();

  const errors = req.validationErrors();
  if (errors) {
    userLogger.error(JSON.stringify(errors));
    return res.status(422).json(errors);
  }

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      userLogger.debug(`User with email ${email} is already exists`);
      return res.status(422).send({ error: 'Email is in use' });
    }

    try {
      await createUser(req.body);
      userLogger.debug(`Create new user with email ${email}`);

      res.redirect('/');
    } catch (err) {
      userLogger.error(err);
      next(err);
    }
  } catch (err) {
    userLogger.err(err);
    next(err);
  }
};

const logIn = (req, res, next) => {
  req.assert('email', 'You must provide valid email').isEmail();
  req.assert('password', 'You must provide valid password').len({ min: 6 });
  req.sanitize('email').normalizeEmail();

  const errors = req.validationErrors();
  if (errors) {
    userLogger.error(JSON.stringify(errors));
    return res.status(422).json(errors);
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      userLogger.error(err);
      return next(err);
    }

    if (!user) {
      userLogger.debug(JSON.stringify(info));
      return res.redirect('/login');
    }

    req.logIn(user, err => {
      if (err) {
        userLogger.error(err);
        return next(err);
      }

      userLogger.debug(JSON.stringify(info));
      res.send({ message: 'Success! You are signed in' });
    });
  })(req, res, next);
};

const getUser = (req, res) => {
  userLogger.debug(`Get user`);
  res.json(req.user);
};

const signOut = (req, res) => {
  userLogger.debug(`User sign out`);
  req.logout();

  res.redirect('/login');
};

module.exports = {
  getUser,
  logIn,
  signOut,
  signUp
};
