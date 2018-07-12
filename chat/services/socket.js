const { chatLogger } = require('../../utils/logger');
const { socketEvent } = require('../../utils/constants');
const chatService = require('../services/chatServices');
const userService = require('../../user/services/userService');

const onConnect = async (socket, userId) => {
  chatLogger.debug(`socket is on connection`);
  const user = await userService.findByIdAndUpdateUser(userId, {
    isOnline: true
  });
  socket.emit(socketEvent.ONLINE, user);
}

const onJoin = (socket) => {
  socket.on('join', conversationId => {
    chatLogger.info(`user joins conversation id ${conversationId}`);
    socket.join(conversationId);
  });
}

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
}

const onDisconnect = (socket, userId) => {
  socket.on(socketEvent.DISCONNECT, async () => {
    chatLogger.debug(`user disconnect`);
    const user = userService.findByIdAndUpdateUser(userId, {
      isOnline: false,
      lastTimeOnline: Date.now()
    });
    socket.broadcast.emit(socketEvent.LEAVE, user);
  });
}

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
      
      onDisconnect(socket, userId);
    });
  });
}