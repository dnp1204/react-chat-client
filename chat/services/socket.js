const { chatLogger } = require('../../utils/logger');
const { socketEvent } = require('../../utils/constants');
const chatService = require('../services/chatServices');
const userService = require('../../user/services/userService');

const onConnect = async (socket, userId) => {
  chatLogger.debug(`socket id ${socket.id} is on connection`);
  await userService.findByIdAndUpdateUser(userId, {
    isOnline: true
  });
  const user = await userService.findUserById(userId);
  if (user) {
    user.conversations.forEach(conversation => {
      socket.to(conversation._id).emit(socketEvent.ONLINE, user);
    });
  }
};

const onJoin = socket => {
  socket.on('join', conversationId => {
    chatLogger.debug(`user joins conversation id ${conversationId}`);
    socket.join(conversationId);
  });
};

const onNewMessage = (io, socket, userId) => {
  socket.on(socketEvent.NEW_MESSAGE, async data => {
    chatLogger.debug(`receive new message ${data.content}`);
    const { conversationId, content } = data;
    try {
      const message = await chatService.addNewMessage(
        userId,
        conversationId,
        content
      );

      io.in(conversationId).emit(socketEvent.IN_MESSAGE, {
        conversationId,
        message
      });
    } catch (err) {
      chatLogger.debug(err.message);
    }
  });
};

const onNewColor = socket => {
  socket.on(socketEvent.CHANGE_SYSTEM_COLOR, data => {
    const { conversationId, color } = data;
    chatLogger.debug(
      `Change system color for conversation ${conversationId} with color ${color}`
    );
    socket.to(conversationId).emit(socketEvent.NEW_SYSTEM_COLOR, color);
  });
};

const onTyping = socket => {
  socket.on(socketEvent.USER_TYPING, data => {
    const { user, conversationId } = data;
    chatLogger.debug(
      `User ${user.id} is typing in the conversaton id ${conversationId}`
    );

    socket
      .to(conversationId)
      .emit(socketEvent.IN_USER_TYPING, { user, conversationId });
  });
};

const onStopTyping = socket => {
  socket.on(socketEvent.USER_STOP_TYPING, data => {
    const { user, conversationId } = data;
    chatLogger.debug(
      `User ${user.id} stops typing in the conversaton id ${conversationId}`
    );

    socket
      .to(conversationId)
      .emit(socketEvent.IN_USER_STOP_TYPING, { user, conversationId });
  });
};

const onDisconnect = (socket, userId) => {
  socket.on(socketEvent.DISCONNECT, async () => {
    chatLogger.debug(`user with id ${userId} disconnect`);
    await userService.findByIdAndUpdateUser(userId, {
      isOnline: false,
      lastTimeOnline: Date.now()
    });
    const user = await userService.findUserById(userId);
    user.conversations.forEach(conversation => {
      socket.to(conversation._id).emit(socketEvent.LEAVE, user);
    });
  });
};

module.exports = (io, session) => {
  io.of('/').on('connection', socket => {
    const cookieString = socket.request.headers.cookie;
    const req = {
      connection: { encrypted: false },
      headers: { cookie: cookieString }
    };
    const res = { getHeader: () => {}, setHeader: () => {} };

    session(req, res, async () => {
      const userId = req.session.passport.user;

      onConnect(socket, userId);

      onJoin(socket);

      onNewMessage(io, socket, userId);

      onNewColor(socket);

      onTyping(socket);

      onStopTyping(socket);

      onDisconnect(socket, userId);
    });
  });
};
