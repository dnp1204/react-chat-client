const { chatLogger } = require('../utils/logger');
const { socketEvent } = require('../utils/constants');
const chatService = require('./services/chatServices');
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

    session(req, res, () => {
      const userId = req.session.passport.user;

      socket.on(socketEvent.NEW_MESSAGE, async data => {
        const { conversationId, content } = data;
        try {
          const message = await chatService.addNewMessage(
            userId,
            conversationId,
            content
          );
          io.in(conversationId).emit(socketEvent.IN_MESSAGE, message);
        } catch (err) {
          chatLogger.debug(err.message);
        }
      });
    });
  });
};
