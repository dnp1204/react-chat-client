const passport = require('passport');
const {
  createUser,
  findUserByEmail,
  findUserById
} = require('../services/userService');
const systemSettingService = require('../services/systemService');
const { userLogger } = require('../../utils/logger');
const helper = require('../../utils/helper');

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
    return next(
      helper.createError(
        'Invalid input',
        400,
        userLogger.debug,
        'Invalid input'
      )
    );
  }

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return next(
        helper.createError(
          'Email is in use',
          422,
          userLogger.debug,
          `User with email ${email} is already exists`
        )
      );
    }

    try {
      await createUser(req.body);
      userLogger.debug(`Create new user with email ${email}`);
      res
        .status(200)
        .send({ message: 'Create a new user sucesfully', redirectUrl: '/' });
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
    return next(
      helper.createError(
        'Invalid input',
        400,
        userLogger.debug,
        'Invalid input'
      )
    );
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(
        helper.createError(
          err.message,
          err.status,
          userLogger.error,
          err.message
        )
      );
    }

    if (!user) {
      return next(
        helper.createError(info.message, 404, userLogger.debug, info.message)
      );
    }

    req.logIn(user, err => {
      if (err) {
        return next(
          helper.createError(err.message, 404, userLogger.debug, err.message)
        );
      }

      userLogger.debug(JSON.stringify(info));
      res
        .status(200)
        .send({ message: 'Success! You are signed in', redirectUrl: '/' });
    });
  })(req, res, next);
};

const getCurrentUser = (req, res) => {
  if (req.user) {
    userLogger.debug(`Get user id ${req.user._id}`);
    res.json(req.user);
  } else {
    res.send(null);
  }
};

const signOut = (req, res) => {
  userLogger.debug(`User sign out`);
  req.logout();
  res.redirect('/');
};

const getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await findUserById(id);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

const getSystemSetting = async (req, res, next) => {
  const { id } = req.params;

  try {
    userLogger.debug(`Find system setting ${id}`);
    const systemSetting = await systemSettingService.findById(id);
    res.send(systemSetting);
  } catch (err) {
    next(err);
  }
};

const updateSystemSetting = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  try {
    userLogger.debug(
      `Update system setting ${id} with value ${JSON.stringify(data)}`
    );
    const systemSetting = await systemSettingService.update(id, data);
    res.send(systemSetting);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCurrentUser,
  getUser,
  logIn,
  signOut,
  signUp,
  getSystemSetting,
  updateSystemSetting
};
