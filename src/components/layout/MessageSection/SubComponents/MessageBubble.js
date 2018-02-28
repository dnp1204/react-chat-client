import React from 'react';
import moment from 'moment';

const MessageBubble = ({ content, color, imageUrl, textColor, timestamp, isFriendMessage }) => {
  return (
    <div id="message-bubble">
      <div
        style={{ backgroundColor: color, color: textColor }}
        className={`message-bubble--content ${isFriendMessage ? 'message-bubble--content__margin-right' : 'message-bubble--content__margin-left'}`}
      >
        {content}
      </div>
      <div className={`message-bubble--timestamp ${isFriendMessage ? 'message-bubble--timestamp__left' : 'message-bubble--timestamp__right'}`}>
        {moment().calendar(timestamp, {
          sameDay: 'h:mm a',
          lastWeek: 'dddd h:mm a',
          sameElse: 'MMMM D, YYYY h:mm a'
        })}
      </div>
    </div>
  );
};

export default MessageBubble;
