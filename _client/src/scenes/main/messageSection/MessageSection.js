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
import MessageTyping from './messageTyping/MessageTyping';

class MessageSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recievedNewInput: false,
      forceScroll: false,
      emoji: '',
      showTyping: false
    };
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

    socket.on(socketEvent.IN_USER_TYPING, data => {
      const { user, conversationId } = data;
      this.setState({ showTyping: true });
      console.log(conversationId);
      console.log(`User ${user.fullName} is typing`);
    });

    socket.on(socketEvent.IN_USER_STOP_TYPING, data => {
      const { user, conversationId } = data;
      this.setState({ showTyping: false });
      console.log(conversationId);
      console.log(`User ${user.fullName} stops typing`);
    });
  }

  componentDidUpdate(prevProps) {
    const diff = _.differenceWith(
      prevProps.conversations.conversations,
      this.props.conversations.conversations,
      (con1, con2) => {
        return con1.id === con2.id;
      }
    );

    if (diff.length > 0) {
      const { conversations } = this.props.conversations;
      conversations.forEach(conversation => {
        this.props.socket.emit('join', conversation.id);
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
    const { showSearch } = this.props.ui.systemSettings;
    const { systemColor, selectedEmoji } = this.props.ui.conversationSettings;
    const { selectedConversation } = this.props.conversations;
    const { showTyping } = this.state;

    return (
      <div id="message-section" className="flex--column">
        <MessageConversation
          userId={this.props.user.id}
          showSearch={showSearch}
          bubleColor={systemColor}
          conversation={selectedConversation}
          shouldScroll={this.state.forceScroll}
          scrollSmooth={this.state.recievedNewInput}
          onScrollToBottomFinishHandler={() =>
            this.onScrollToBottomFinishHandler()
          }
        />
        <MessageTyping
          show={showTyping}
          avatarSize={30}
          imageUrl="https://pbs.twimg.com/profile_images/833767319973212161/Ft904pMk_400x400.jpg"
        />
        <MessageInput
          user={this.props.user}
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
    user: state.auth,
    conversations: state.conversations,
    ui: state.ui
  };
}

export default connect(
  mapStateToProps,
  { receiveMessage, friendGoOffline, friendGoOnline }
)(MessageSection);
