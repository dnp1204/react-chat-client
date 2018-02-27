import React, { Component } from 'react';
import MultipleIconRow from '../../common/icon/MultipleIconRow';

class MessageSection extends Component {
  render() {
    const style = { color: 'rgba(0, 0, 0, 0.3)' };
    const size = 'lg';
    const iconArray = [{ iconName: 'file-image-o', size, style },
    { iconName: 'sticky-note-o', size, style },
    { iconName: 'smile-o', size, style },
    { iconName: 'microphone', size, style },
    { iconName: 'camera', size, style }];

    return (
      <div id="message-section" className="flex--column">
        <div className="message-section--conversation">
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

export default MessageSection;