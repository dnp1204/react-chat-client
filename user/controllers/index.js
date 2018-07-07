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

    const newUser = await createUser({ email, password });
    userLogger.debug(`Create new user with email ${email}`);
    res.json(newUser);
  } catch (err) {
    userLogger.err(err);
    next(err);
  }
};

module.exports = {
  signUp
};
