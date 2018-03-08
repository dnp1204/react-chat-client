import React from 'react';
import MultipleIconRow from '../../../common/icon/MultipleIconRow';

const MessageTools = () => {
    const color = 'rgba(0, 0, 0, 0.3)';
    const size = 'lg';
    const iconArray = [
      { iconName: 'file-image-o', size, color },
      { iconName: 'smile-o', size, color },
      { iconName: 'microphone', size, color },
      { iconName: 'camera', size, color }
    ];
    
    return (
        <div className="message-section--tool">
          <MultipleIconRow iconArray={iconArray} />
        </div>
    );
}

export default MessageTools;