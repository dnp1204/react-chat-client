const userService = require('../services/userService');
const { userLogger } = require('../../utils/logger');

const getAllFriends = (req, res, next) => {};

const addFriend = async (req, res, next) => {
  const { id } = req.params;
  for (let friendId of req.user.friends) {
    if (friendId.toString() === id) {
      userLogger.debug(`You already add this friend ${id}`);
      return res
        .status(422)
        .send({ message: `You already add this friend ${id}` });
    }
  }

  try {
    const friend = await userService.addFriend(req.user._id, id);
    userLogger.debug(`Add a friend with email ${friend.email}`);
    res.json(friend);
  } catch (err) {
    userLogger.error(err);
    next(err);
  }
};

module.exports = {
  addFriend,
  getAllFriends
};
