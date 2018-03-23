import React, { Component } from 'react';

class MessageInput extends Component {
  state = { messageText: '' };

  componentWillReceiveProps(nextProps) {
    if (nextProps.emoji !== '') {
      this.setState({ messageText: this.state.messageText + nextProps.emoji });
    }
  }

  onKeyPressHandler(event) {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (this.state.messageText.trim() !== '') {
        this.props.sendMessage(this.state.messageText);
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
