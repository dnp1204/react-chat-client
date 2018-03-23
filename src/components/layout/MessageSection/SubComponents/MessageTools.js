import React from 'react';
import MultipleIconRow from '../../../common/icon/MultipleIconRow';

const MessageTools = ({ iconArray }) => {
    return (
        <div className="message-section--tool">
          <MultipleIconRow iconArray={iconArray} />
        </div>
    );
}

export default MessageTools;