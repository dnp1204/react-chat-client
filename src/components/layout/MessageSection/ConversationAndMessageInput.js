import React, { Component } from 'react';
import MultipleIconRow from '../../common/icon/MultipleIconRow';

class ConversationAndMessageInput extends Component {
  render() {
    const style = { color: 'rgba(0, 0, 0, 0.3)' };
    const size = 'lg';
    const iconArray = [{ iconName: 'file-image-o', size, style },
    { iconName: 'sticky-note-o', size, style },
    { iconName: 'smile-o', size, style },
    { iconName: 'microphone', size, style },
    { iconName: 'camera', size, style }];

    return (
      <div id="conversation-and-message-input">
        <div className="conversation-and-message-input--conversation">

        </div>
        <div className="conversation-and-message-input--message-input">
          <div>
            <textarea placeholder="Type a message..." />
          </div>
          <div>
            <MultipleIconRow iconArray={iconArray} />
          </div>
        </div>
      </div>
    );
  }
}

export default ConversationAndMessageInput;