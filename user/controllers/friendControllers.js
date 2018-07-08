const userService = require('../services/userService');
const { userLogger } = require('../../utils/logger');

const getAllFriends = async (req, res, next) => {
  const userFriends = await userService.getAllFriends(req.user._id);
  userLogger.debug(`Get all friends of user ${JSON.stringify(userFriends)}`);
  res.send({ friends: userFriends });
};

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
