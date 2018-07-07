import './MessageSection.scss';

import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { sendMessage } from '../../../actions';
import { socketEvent } from '../../../utils/constants';
import MessageConversation from './messageConversation/MessageConversation';
import MessageInput from './messageInput/MessageInput';
import MessageTools from './messageTools/MessageTools';

class MessageSection extends Component {
  constructor(props) {
    super(props);

    this.state = { recievedNewInput: false, emoji: '' };

    this.socket = io('http://localhost:5000');
    this.socket.on(socketEvent.IN_MESSAGE, data => {
      console.log(data);
    });
  }

  onNewMessageHandler() {
    this.setState({ recievedNewInput: true });
  }

  onScrollToBottomFinishHandler() {
    this.setState({ recievedNewInput: false });
  }

  render() {
    const { selectedEmoji, showSearch } = this.props.systemSettings;
    const imageUrl =
      'https://pbs.twimg.com/profile_images/833767319973212161/Ft904pMk_400x400.jpg';
    let _id =
      this.props.friendMessages.messages[
        this.props.friendMessages.messages.length - 1
      ]._id + 1;
    let message = {
      _id,
      user: { userId: 0, imageUrl },
      timestamp: moment.now(),
      content: ''
    };

    return (
      <div id="message-section" className="flex--column">
        <MessageConversation
          showSearch={showSearch}
          bubleColor={this.props.systemColor}
          friendMessages={this.props.friendMessages}
          shouldScroll={this.state.recievedNewInput}
          onScrollToBottomFinishHandler={() =>
            this.onScrollToBottomFinishHandler()
          }
        />
        <MessageInput
          socket={this.socket}
          emoji={this.state.emoji}
          onNewMessageHandler={() => this.onNewMessageHandler()}
          sendMessage={content => {
            this.setState({ emoji: '' });
            message.content = content;
            this.props.sendMessage(message);
          }}
        />
        <MessageTools
          pickEmoji={emoji => this.setState({ emoji })}
          selectedEmojiId={selectedEmoji.id}
          onClickSelectedEmoji={() => {
            message.content = selectedEmoji.native;
            this.props.sendMessage(message);
            this.onNewMessageHandler();
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friendMessages: state.friendMessages,
    systemSettings: state.systemSettings
  };
}

export default connect(
  mapStateToProps,
  { sendMessage }
)(MessageSection);
