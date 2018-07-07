const { chatLogger } = require('../utils/logger');
const { socketEvent } = require('../utils/constants');

module.exports = io => {
  io.of('/').on('connection', socket => {
    chatLogger.info(
      `socket.io in chat module on connection with id ${socket.id}`
    );

    socket.on(socketEvent.NEW_MESSAGE, data => {
      chatLogger.debug(data);
      socket.broadcast.emit(socketEvent.IN_MESSAGE, data);
    });
  });
};
