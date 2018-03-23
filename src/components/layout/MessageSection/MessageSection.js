import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageTools from './SubComponents/MessageTools';
import MessageInput from './SubComponents/MessageInput';
import MessageConversation from './SubComponents/MessageConversation';
import { sendMessage } from '../../../actions';
import EmojiPicker from '../../common/EmojiPicker';

class MessageSection extends Component {
  state = { recievedNewInput: false };
  
  onNewMessageHandler() {
    this.setState({ recievedNewInput: true });
  }
  
  onScrollToBottomFinishHandler() {
    this.setState({ recievedNewInput: false });
  }
  
  renderIconPicker() {
    return (
      <EmojiPicker />
    );
  }
  
  render() {
    const imageUrl = 'https://pbs.twimg.com/profile_images/833767319973212161/Ft904pMk_400x400.jpg';
    let _id = this.props.friendMessages.messages[this.props.friendMessages.messages.length - 1]._id + 1;
    let message = { _id, user: { userId: 0, imageUrl }, timestamp: moment.now(), content: '' }
    
    const color = 'rgba(0, 0, 0, 0.3)';
    const size = 'lg';
    const iconArray = [
      { iconName: 'file-image-o', size, color },
      { iconName: 'smile-o', size, color, showComponentWhenClick: this.renderIconPicker() },
      { iconName: 'microphone', size, color },
      { iconName: 'camera', size, color }
    ];
    
    return (
      <div id="message-section" className="flex--column">
        <MessageConversation 
          friendMessages={this.props.friendMessages} 
          shouldScroll={this.state.recievedNewInput}
          onScrollToBottomFinishHandler={() => this.onScrollToBottomFinishHandler()}/>
        <MessageInput 
          onNewMessageHandler={() => this.onNewMessageHandler()} 
          sendMessage={(content) => {
            message.content = content;
            this.props.sendMessage(message);
          }
        } />
        <MessageTools iconArray={iconArray} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { friendMessages: state.friendMessages };
}

export default connect(mapStateToProps, { sendMessage })(MessageSection);
