import React, { PureComponent } from 'react';

import ScrollToBottom from '../../../../components/tools/scrollToBottom/ScrollToBottom';
import Resize from '../../../../components/tools/resize/Resize';
import { Color } from '../../../../utils/constants';
import MessageBubble from '../messageBubble/MessageBubble';
import MessageSearch from '../messageSearch/MessageSearch';

class MessageConversation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      marginLeftForContent: 85,
      marginRightForContent: 85,
      defaultOverflow: 'hidden'
    };
    this.conversationElement = null;
  }

  resize() {
    if (this.conversationElement) {
      this.setState({ width: this.conversationElement.clientWidth });
    }

    if (window.innerWidth <= 550) {
      this.setState({
        marginLeftForContent: 0,
        marginRightForContent: 0,
        defaultOverflow: 'auto'
      });
    } else {
      this.setState({
        marginLeftForContent: 85,
        marginRightForContent: 85,
        defaultOverflow: 'hidden'
      });
    }
  }

  renderMessageBubble(
    message,
    marginBottom,
    isCurrentUserMessage,
    showFriendAvatarOnLastMessage
  ) {
    const { bubleColor } = this.props;
    const { user: { imageUrl }, timestamp, content } = message;
    const isShowFriendAvatarOnLastText =
      showFriendAvatarOnLastMessage && !isCurrentUserMessage;

    const gray = Color.LIGHT_WHITE;
    const avatarSize = 30;
    const marginRightForAvatar = 10;
    const avatarContainerStyle = { marginRight: marginRightForAvatar };

    let marginLeftForContent = avatarSize + marginRightForAvatar;
    if (isShowFriendAvatarOnLastText) {
      marginLeftForContent = 0;
    } else if (isCurrentUserMessage) {
      marginLeftForContent = this.state.marginLeftForContent;
    }

    const messageBubbleContentStyle = {
      backgroundColor: isCurrentUserMessage ? bubleColor : gray,
      color: isCurrentUserMessage ? 'white' : 'black',
      marginLeft: marginLeftForContent,
      marginRight: isCurrentUserMessage ? 0 : this.state.marginRightForContent
    };

    return (
      <MessageBubble
        avatarSize={avatarSize}
        avatarContainerStyle={avatarContainerStyle}
        content={content}
        imageUrl={imageUrl}
        timestamp={timestamp}
        isShowAvatar={isShowFriendAvatarOnLastText}
        timestampSide={isCurrentUserMessage ? 'right' : 'left'}
        messageBubbleContentStyle={messageBubbleContentStyle}
      />
    );
  }

  renderMessages() {
    const { friendMessages: { messages } } = this.props;
    let marginBottom;

    return messages.map((message, index) => {
      const { _id, user: { userId } } = message;
      const isCurrentUserMessage = userId === 0;
      const float = isCurrentUserMessage ? 'float__right' : 'float__left';

      if (index + 1 < messages.length) {
        marginBottom = userId === messages[index + 1].user.userId ? 3 : 20;
        index += 1;
      } else {
        marginBottom = 20;
      }

      const showFriendAvatarOnLastMessage = marginBottom === 20;

      return (
        <div
          key={_id}
          style={{ marginBottom }}
          className={`message-section--conversation__element ${float}`}
        >
          {this.renderMessageBubble(
            message,
            marginBottom,
            isCurrentUserMessage,
            showFriendAvatarOnLastMessage
          )}
        </div>
      );
    });
  }

  renderShowSearchInput() {
    const { showSearch } = this.props;

    if (showSearch) {
      return <MessageSearch customWidth={this.state.width} />;
    } else {
      return <div />;
    }
  }

  render() {
    const { shouldScroll, onScrollToBottomFinishHandler } = this.props;

    return (
      <ScrollToBottom
        defaultOverflow={this.state.defaultOverflow}
        hoverOverflowY="overlay"
        shouldScroll={shouldScroll}
        onScrollToBottomFinishHandler={() => onScrollToBottomFinishHandler()}
      >
        <Resize resize={this.resize.bind(this)}>
          {this.renderShowSearchInput()}
          <div
            ref={conversationElement =>
              (this.conversationElement = conversationElement)
            }
            className="message-section--conversation"
          >
            {this.renderMessages()}
          </div>
        </Resize>
      </ScrollToBottom>
    );
  }
}

export default MessageConversation;
