import React from 'react';

import ScrollToBottom from '../../../../components/common/ScrollToBottom';
import { Color } from '../../../utilities/constants';
import MessageBubble from './MessageBubble';

const renderMessages = (friendMessages, bubleColor) => {
  const gray = Color.LIGHT_WHITE;

  const { messages } = friendMessages;

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
      <div
        key={_id}
        style={{ marginBottom }}
        className={`message-section--conversation__element ${float}`}
      >
        <MessageBubble
          content={content}
          color={userId === 0 ? bubleColor : gray}
          textColor={userId === 0 ? 'white' : 'black'}
          float={userId === 0 ? 'float__right' : 'float__left'}
          imageUrl={imageUrl}
          timestamp={timestamp}
          isFriendMessage={userId !== 0}
          isShowFriendAvatarOnLastText={marginBottom === 20 ? true : false}
        />
      </div>
    );
  });
};

const MessageConversation = ({
  friendMessages,
  shouldScroll,
  onScrollToBottomFinishHandler,
  bubleColor
}) => {
  return (
    <ScrollToBottom
      shouldScroll={shouldScroll}
      onScrollToBottomFinishHandler={() => onScrollToBottomFinishHandler()}
    >
      <div className="message-section--conversation">
        {renderMessages(friendMessages, bubleColor)}
      </div>
    </ScrollToBottom>
  );
};

export default MessageConversation;
