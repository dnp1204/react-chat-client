import './MessageBubble.scss';

import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import CircleAvatar from '../../../../components/elements/circleAvatar/CircleAvatar';

class MessageBubble extends Component {
  renderFriendAvatarOnLastMessage() {
    const {
      isShowAvatar,
      imageUrl,
      avatarSize,
      avatarContainerStyle
    } = this.props;
    if (isShowAvatar) {
      return (
        <div style={avatarContainerStyle} className="message-bubble--avatar">
          <CircleAvatar
            avatar={imageUrl}
            width={avatarSize}
            height={avatarSize}
          />
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    const {
      content,
      timestamp,
      timestampSide,
      messageBubbleContentStyle
    } = this.props;

    let timestampClassName = 'message-bubble--timestamp__left';
    if (timestampSide === 'right') {
      timestampClassName = 'message-bubble--timestamp__right';
    }

    return (
      <div id="message-bubble" className="flex--row align__center">
        {this.renderFriendAvatarOnLastMessage()}
        <div
          style={messageBubbleContentStyle}
          className="message-bubble--content"
        >
          {content}
        </div>
        <div
          className={`hide-on-xs message-bubble--timestamp ${timestampClassName}`}
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

MessageBubble.propTypes = {
  content: PropTypes.string,
  timestamp: PropTypes.string,
  timestampSide: PropTypes.string,
  imageUrl: PropTypes.string,
  messageBubbleContentStyle: PropTypes.object,
  avatarContainerStyle: PropTypes.object,
  avatarSize: PropTypes.number,
  isShowAvatar: PropTypes.bool
};

MessageBubble.defaultPropTypes = {
  timestampSide: 'left'
};

export default MessageBubble;
