import React from 'react';
import moment from 'moment';
import CircleAvatar from '../../../common/CircleAvatar';

const MessageBubble = ({
  content,
  color,
  imageUrl,
  textColor,
  timestamp,
  isFriendMessage,
  isShowFriendAvatarOnLastText
}) => {
  const imageSize = 30;
  const marginRightForAvatar = 10;

  let marginLeftForContent = imageSize + marginRightForAvatar;
  if (isShowFriendAvatarOnLastText && isFriendMessage) {
    marginLeftForContent = 0;
  } else if (!isFriendMessage) {
    marginLeftForContent = 75;
  }

  return (
    <div id="message-bubble" className="flex--row align__center">
      {isFriendMessage & isShowFriendAvatarOnLastText ? (
        <div
          style={{ marginRight: marginRightForAvatar }}
          className="message-bubble--avatar"
        >
          <CircleAvatar avatar={imageUrl} width={30} height={30} />
        </div>
      ) : (
        <div />
      )}
      <div
        style={{
          backgroundColor: color,
          color: textColor,
          marginLeft: marginLeftForContent
        }}
        className={`message-bubble--content ${
          isFriendMessage
            ? 'message-bubble--content__margin-right'
            : 'message-bubble--content__margin-left'
        }`}
      >
        {content}
      </div>
      <div
        className={`message-bubble--timestamp ${
          isFriendMessage
            ? 'message-bubble--timestamp__left'
            : 'message-bubble--timestamp__right'
        }`}
      >
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
