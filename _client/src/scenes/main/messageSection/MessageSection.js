import './MessageSection.scss';

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  friendGoOffline,
  friendGoOnline,
  receiveMessage
} from '../../../actions';
import { socketEvent } from '../../../utils/constants';
import MessageConversation from './messageConversation/MessageConversation';
import MessageInput from './messageInput/MessageInput';
import MessageTools from './messageTools/MessageTools';

class MessageSection extends Component {
  constructor(props) {
    super(props);

    this.state = { recievedNewInput: false, forceScroll: false, emoji: '' };
  }

  componentDidMount() {
    const { socket } = this.props;
    const { conversations } = this.props.conversations;

    conversations.forEach(conversation => {
      socket.emit('join', conversation.id);
    });

    socket.on(socketEvent.IN_MESSAGE, data => {
      this.props.receiveMessage(data);
      this.setState({ recievedNewInput: true });
    });

    socket.on(socketEvent.ONLINE, data => {
      this.props.friendGoOnline(data);
    });

    socket.on(socketEvent.LEAVE, data => {
      this.props.friendGoOffline(data);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const diff = _.differenceWith(
      prevProps.conversations.conversations,
      this.props.conversations.conversations,
      (con1, con2) => {
        return con1.id === con2.id;
      }
    );

    // console.log(diff);
    if (diff.length > 0) {
      const { conversations } = this.props.conversations;
      conversations.forEach(conversation => {
        this.socket.emit('join', conversation.id);
      });
    }

    if (
      prevProps.conversations.selectedConversation.id !==
      this.props.conversations.selectedConversation.id
    ) {
      this.setState({ forceScroll: true });
    }
  }

  onNewMessageHandler() {
    this.setState({ recievedNewInput: true, emoji: '' });
  }

  onScrollToBottomFinishHandler() {
    this.setState({ recievedNewInput: false, forceScroll: false });
  }

  onPickSelectedEmoji(emoji) {
    const { selectedConversation } = this.props.conversations;
    const message = {
      conversationId: selectedConversation.id,
      content: emoji.native
    };
    this.props.socket.emit(socketEvent.NEW_MESSAGE, message);

    this.onNewMessageHandler();
  }

  render() {
    const { selectedEmoji, showSearch } = this.props.ui.systemSettings;
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
          socket={this.props.socket}
          emoji={this.state.emoji}
          conversationId={selectedConversation.id}
          onNewMessageHandler={() => this.onNewMessageHandler()}
        />
        <MessageTools
          pickEmoji={emoji => this.setState({ emoji })}
          selectedEmojiId={selectedEmoji.id}
          pickSelectedEmojiId={this.onPickSelectedEmoji.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    socket: state.socket,
    auth: state.auth,
    conversations: state.conversations,
    ui: state.ui
  };
}

export default connect(
  mapStateToProps,
  { receiveMessage, friendGoOffline, friendGoOnline }
)(MessageSection);
