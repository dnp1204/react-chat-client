import React, { Component } from 'react';

import { socketEvent } from '../../../../utils/constants';

class MessageInput extends Component {
  state = { messageText: '', emitTyping: false, emitStopTyping: false };

  componentWillReceiveProps(nextProps) {
    if (nextProps.emoji !== '') {
      this.setState({ messageText: this.state.messageText + nextProps.emoji });
    }
  }

  chunkString(stringToChunk, length) {
    let numOfElement = Math.ceil(stringToChunk.length / length);
    let returnedArray = [];
    for (let i = 0; i < numOfElement; i++) {
      let start = i * length;
      let end = (i + 1) * length;
      returnedArray.push(stringToChunk.substring(start, end));
    }
    return returnedArray;
  }

  emitTyping = () => {
    const { socket, conversationId, user } = this.props;

    socket.emit(socketEvent.USER_TYPING, { conversationId, user });
    this.setState({ emitTyping: true, emitStopTyping: false });
  };

  emitStopTyping = () => {
    const { socket, conversationId, user } = this.props;

    socket.emit(socketEvent.USER_STOP_TYPING, { conversationId, user });
    this.setState({ emitTyping: false, emitStopTyping: true });
  };

  sendNewMessage = content => {
    const { socket, conversationId } = this.props;

    const message = {
      conversationId,
      content
    };

    socket.emit(socketEvent.NEW_MESSAGE, message);
    this.emitStopTyping();

    this.props.onNewMessageHandler();
    this.setState({ messageText: '' });
  };

  onKeyPressHandler = event => {
    if (!this.state.emitTyping) {
      this.emitTyping();
    }

    if (event.key === 'Enter') {
      event.preventDefault();

      if (this.state.messageText.trim() !== '') {
        const MAX_LENGTH_WORD = 46;
        let contentArrayWithoutLongWord = [];

        for (const word of this.state.messageText.trim().split(' ')) {
          if (word.length < MAX_LENGTH_WORD) {
            contentArrayWithoutLongWord.push(word);
          } else {
            contentArrayWithoutLongWord = contentArrayWithoutLongWord.concat(
              this.chunkString(word, MAX_LENGTH_WORD)
            );
          }
        }

        this.sendNewMessage(contentArrayWithoutLongWord.join(' '));
      }
    }
  };

  onBlurHandler = () => {
    if (!this.state.emitStopTyping) {
      this.emitStopTyping();
    }
  };

  onChangeHandler = event => {
    this.setState({ messageText: event.target.value });
  };

  render() {
    return (
      <div className="message-section--input border-top">
        <textarea
          onBlur={this.onBlurHandler}
          value={this.state.messageText}
          onChange={this.onChangeHandler}
          onKeyPress={this.onKeyPressHandler}
          placeholder="Type a message..."
        />
      </div>
    );
  }
}

export default MessageInput;
