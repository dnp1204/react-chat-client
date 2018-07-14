import './MessageSection.scss';

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { socketEvent } from '../../../utils/constants';
import {
  receiveMessage,
  friendGoOffline,
  friendGoOnline
} from '../../../actions';
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

    this.socket.on(socketEvent.ONLINE, data => {
      this.props.friendGoOnline(data);
    });

    this.socket.on(socketEvent.LEAVE, data => {
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
      console.log('yes');
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
    this.setState({ recievedNewInput: true });
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
    this.socket.emit(socketEvent.NEW_MESSAGE, message);

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
          socket={this.socket}
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
    auth: state.auth,
    conversations: state.conversations,
    ui: state.ui
  };
}

export default connect(
  mapStateToProps,
  { receiveMessage, friendGoOffline, friendGoOnline }
)(MessageSection);
