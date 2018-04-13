import React, { Component } from 'react';

import ScrollToBottom from '../../../../components/elements/scrollToBottom/ScrollToBottom';
import { Color } from '../../../../utils/constants';
import MessageBubble from '../messageBubble/MessageBubble';
import MessageSearch from '../messageSearch/MessageSearch';

class MessageConversation extends Component {
  renderMessages = (friendMessages, bubleColor) => {
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

  render() {
    const {
      friendMessages,
      shouldScroll,
      onScrollToBottomFinishHandler,
      bubleColor,
      showSearch
    } = this.props;

    return (
      <ScrollToBottom
        shouldScroll={shouldScroll}
        onScrollToBottomFinishHandler={() => onScrollToBottomFinishHandler()}
      >
        {showSearch ? <MessageSearch /> : <div />}
        <div className="message-section--conversation">
          {this.renderMessages(friendMessages, bubleColor)}
        </div>
      </ScrollToBottom>
    );
  }
}

export default MessageConversation;
