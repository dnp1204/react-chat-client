const { chatLogger } = require('../utils/logger');
const { socketEvent } = require('../utils/constants');
const routes = require('./routes');

module.exports = (app, io, session) => {
  app.use('/api/', routes());

  io.of('/').on('connection', socket => {
    const cookieString = socket.request.headers.cookie;
    const req = {
      connection: { encrypted: false },
      headers: { cookie: cookieString }
    };
    const res = { getHeader: () => {}, setHeader: () => {} };

    session(req, res, () => {
      // console.log(req.session);
    });

    chatLogger.info(
      `socket.io in chat module on connection with id ${socket.id}`
    );

    socket.on(socketEvent.NEW_MESSAGE, data => {
      chatLogger.debug(data);
      socket.broadcast.emit(socketEvent.IN_MESSAGE, data);
    });
  });
};
