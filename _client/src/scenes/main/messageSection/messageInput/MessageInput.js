import React, { Component } from 'react';

// import { socketEvent } from '../../../../utils/constants';

class MessageInput extends Component {
  state = { messageText: '' };

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.emoji !== '') {
      this.setState({ messageText: this.state.messageText + nextProps.emoji });
    }
  }

  onKeyPressHandler(event) {
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

        this.props.sendMessage(contentArrayWithoutLongWord.join(' '));
        this.props.onNewMessageHandler();
        this.setState({ messageText: '' });
      }
    }
  }

  onChangeHandler(event) {
    this.setState({ messageText: event.target.value });
  }

  render() {
    return (
      <div className="message-section--input border-top">
        <textarea
          value={this.state.messageText}
          onChange={this.onChangeHandler.bind(this)}
          onKeyPress={this.onKeyPressHandler.bind(this)}
          placeholder="Type a message..."
        />
      </div>
    );
  }
}

export default MessageInput;
