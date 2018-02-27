import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageTools from './SubComponents/MessageTools';
import MessageInput from './SubComponents/MessageInput';
import MessageConversation from './SubComponents/MessageConversation';

class MessageSection extends Component {
  render() {
    return (
      <div id="message-section" className="flex--column">
        <MessageConversation friendMessages={this.props.friendMessages} />
        <MessageInput />
        <MessageTools />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { friendMessages: state.friendMessages };
}

export default connect(mapStateToProps)(MessageSection);
