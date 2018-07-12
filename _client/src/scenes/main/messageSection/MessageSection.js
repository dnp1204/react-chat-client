import './MessageSection.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { socketEvent } from '../../../utils/constants';
import { receiveMessage } from '../../../actions';
import MessageConversation from './messageConversation/MessageConversation';
import MessageInput from './messageInput/MessageInput';
import MessageTools from './messageTools/MessageTools';

class MessageSection extends Component {
  constructor(props) {
    super(props);

    this.state = { recievedNewInput: false, forceScroll: false, emoji: '' };
    this.socket = io('http://localhost:5000', {
      transports: ['websocket']
    });
  }

  componentDidMount() {
    const { conversations } = this.props.conversations;
    conversations.forEach(conversation => {
      this.socket.emit('join', conversation.id);
    });

    this.socket.on(socketEvent.IN_MESSAGE, data => {
      this.props.receiveMessage(data);
      this.setState({ recievedNewInput: true });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.conversations.selectedConversation.id !==
      this.props.conversations.selectedConversation.id
    ) {
      this.setState({ forceScroll: true });
    }
  }

  onNewMessageHandler() {
    this.setState({ recievedNewInput: true });
  }

  onScrollToBottomFinishHandler() {
    this.setState({ recievedNewInput: false, forceScroll: false });
  }

  render() {
    const { selectedEmoji, showSearch } = this.props.systemSettings;
    const { selectedConversation } = this.props.conversations;

    return (
      <div id="message-section" className="flex--column">
        <MessageConversation
          userId={this.props.auth.id}
          showSearch={showSearch}
          bubleColor={this.props.systemColor}
          conversation={selectedConversation}
          shouldScroll={this.state.forceScroll}
          scrollSmooth={this.state.recievedNewInput}
          onScrollToBottomFinishHandler={() =>
            this.onScrollToBottomFinishHandler()
          }
        />
        <MessageInput
          socket={this.socket}
          emoji={this.state.emoji}
          conversationId={selectedConversation.id}
          onNewMessageHandler={() => this.onNewMessageHandler()}
        />
        <MessageTools
          pickEmoji={emoji => this.setState({ emoji })}
          selectedEmojiId={selectedEmoji.id}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    conversations: state.conversations,
    systemSettings: state.systemSettings
  };
}

export default connect(
  mapStateToProps,
  { receiveMessage }
)(MessageSection);
