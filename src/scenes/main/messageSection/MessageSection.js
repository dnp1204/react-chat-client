import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MessageSection.scss';
import { sendMessage } from '../../../actions';
import MessageConversation from './messageConversation/MessageConversation';
import MessageInput from './messageInput/MessageInput';
import MessageTools from './messageTools/MessageTools';

class MessageSection extends Component {
  
  state = { recievedNewInput: false, emoji: '' };
  
  onNewMessageHandler() {
    this.setState({ recievedNewInput: true });
  }
  
  onScrollToBottomFinishHandler() {
    this.setState({ recievedNewInput: false });
  }
  
  render() {
    const imageUrl = 'https://pbs.twimg.com/profile_images/833767319973212161/Ft904pMk_400x400.jpg';
    let _id = this.props.friendMessages.messages[this.props.friendMessages.messages.length - 1]._id + 1;
    let message = { _id, user: { userId: 0, imageUrl }, timestamp: moment.now(), content: '' }
    
    return (
      <div id="message-section" className="flex--column">
        <MessageConversation
          bubleColor={this.props.systemColor} 
          friendMessages={this.props.friendMessages} 
          shouldScroll={this.state.recievedNewInput}
          onScrollToBottomFinishHandler={() => this.onScrollToBottomFinishHandler()}/>
        <MessageInput 
          emoji={this.state.emoji}
          onNewMessageHandler={() => this.onNewMessageHandler()} 
          sendMessage={(content) => {
            this.setState({ emoji: '' });
            message.content = content;
            this.props.sendMessage(message);
          }
        } />
        <MessageTools pickEmoji={(emoji) => this.setState({ emoji })} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { friendMessages: state.friendMessages, systemColor: state.systemColor };
}

export default connect(mapStateToProps, { sendMessage })(MessageSection);