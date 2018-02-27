import React from 'react';

const MessageBubble = ({ content, color, imageUrl, textColor }) => {
  return (
    <div id="message-bubble">
      <div
        style={{ backgroundColor: color, color: textColor }}
        className="message-bubble--content"
      >
        {content}
      </div>
    </div>
  );
};

export default MessageBubble;
