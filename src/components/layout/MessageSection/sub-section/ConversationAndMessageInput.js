import React, { Component } from 'react';
import MultipleIconRow from '../../../common/icon/MultipleIconRow';

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
      <div>
        <MultipleIconRow iconArray={iconArray} />
      </div>
    );
  }
}

export default ConversationAndMessageInput;