const { chatLogger } = require('../utils/logger');
const { socketEvent } = require('../utils/constants');
const chatService = require('./services/chatServices');
const userService = require('../user/services/userService');
const routes = require('./routes');

module.exports = (app, io, session) => {
  app.use('/api/', routes());

  io.of('/').on('connection', socket => {
    chatLogger.info(
      `socket.io in chat module on connection with id ${socket.id}`
    );

    socket.on('join', roomId => {
      chatLogger.info(`user joins room id ${roomId}`);
      socket.join(roomId);
    });

    const cookieString = socket.request.headers.cookie;
    const req = {
      connection: { encrypted: false },
      headers: { cookie: cookieString }
    };
    const res = { getHeader: () => {}, setHeader: () => {} };

    session(req, res, async () => {
      const userId = req.session.passport.user;
      const user = await userService.findByIdAndUpdateUser(userId, {
        isOnline: true
      });

      socket.emit(socketEvent.ONLINE, user);

      socket.on(socketEvent.NEW_MESSAGE, async data => {
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

      socket.on(socketEvent.DISCONNECT, async () => {
        const user = userService.findByIdAndUpdateUser(userId, {
          isOnline: false,
          lastTimeOnline: Date.now()
        });
        socket.broadcast.emit(socketEvent.LEAVE, user);
      });
    });
  });
};
