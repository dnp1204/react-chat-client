const passport = require('passport');
const { createUser, findUserByEmail } = require('../dal/userDAL');
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
      const newUser = await createUser({ email, password });
      userLogger.debug(`Create new user with email ${email}`);
      res.send({ success: true });
    } catch (err) {
      userLogger.error(err);
      next(err);
    }
  } catch (err) {
    userLogger.err(err);
    next(err);
  }
};

const signIn = (req, res, next) => {
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
      return res.redirect('/signin');
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
  if (req.user) {
    return res.json(req.user);
  }

  res.redirect('/');
};

const signOut = (req, res) => {
  req.logout();
  res.json(req.user);
};

module.exports = {
  getUser,
  signIn,
  signOut,
  signUp
};
