import moment from 'moment';
import React, { Component } from 'react';

import CircleAvatar from '../../../common/CircleAvatar';

class MessageBubble extends Component {
  state = { marginLeftForContent: 85 };

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  resize() {
    if (window.innerWidth <= 550) {
      this.setState({ marginLeftForContent: 0 });
    } else {
      this.setState({ marginLeftForContent: 85 });
    }
  }

  render() {
    const {
      content,
      color,
      imageUrl,
      textColor,
      timestamp,
      isFriendMessage,
      isShowFriendAvatarOnLastText
    } = this.props;

    const imageSize = 30;
    const marginRightForAvatar = 10;

    let marginLeftForContent = imageSize + marginRightForAvatar;
    if (isShowFriendAvatarOnLastText && isFriendMessage) {
      marginLeftForContent = 0;
    } else if (!isFriendMessage) {
      marginLeftForContent = this.state.marginLeftForContent;
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
          className={`hide-on-xs message-bubble--timestamp ${
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
  }
}

export default MessageBubble;
