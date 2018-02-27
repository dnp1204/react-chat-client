import React, { Component } from 'react';
import { connect } from 'react-redux';
import MultipleIconRow from '../../common/icon/MultipleIconRow';
import MessageBubble from './SubComponents/MessageBubble';

class MessageSection extends Component {
  renderMessages() {
    const blue = '#0584FF';
    const gray = '#F1F0F0';
    
    const { friendId, messages } = this.props.friendMessages;
    
    let marginBottom;
    let index = 0;
  
    return messages.map(message => {
      const { _id, user: { userId, imageUrl }, timestamp, content } = message;
      const float = userId === 0 ? 'float__right' : 'float__left';
      
      if (index + 1 < messages.length) {
        marginBottom = userId === messages[index + 1].user.userId ? 3 : 20;
        index += 1;
      } else {
        marginBottom = 20;
      }

      return (
        <div key={_id} style={{ marginBottom }} className={`message-section--conversation__element ${float}`}>
          <MessageBubble
            content={content}
            color={userId === 0 ? blue : gray}
            textColor={userId === 0 ? 'white' : 'black'}
            float={userId === 0 ? 'float__right' : 'float__left'}
            imageUrl={imageUrl}
            timestamp={timestamp}
            isFriendMessage={userId !== 0}
          />
        </div>
      );
    });
  }

  render() {
    const style = { color: 'rgba(0, 0, 0, 0.3)' };
    const size = 'lg';
    const iconArray = [
      { iconName: 'file-image-o', size, style },
      { iconName: 'sticky-note-o', size, style },
      { iconName: 'smile-o', size, style },
      { iconName: 'microphone', size, style },
      { iconName: 'camera', size, style }
    ];

    return (
      <div id="message-section" className="flex--column">
        <div className="message-section--conversation">
          {this.renderMessages()}
        </div>
        <div className="message-section--input border-top">
          <textarea placeholder="Type a message..." />
        </div>
        <div className="message-section--tool">
          <MultipleIconRow iconArray={iconArray} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { friendMessages: state.friendMessages };
}

export default connect(mapStateToProps)(MessageSection);
