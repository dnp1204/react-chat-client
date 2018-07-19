import './MessageTyping.scss';

import React, { PureComponent } from 'react';
import { BeatLoader } from 'react-spinners';

import CircleAvatar from '../../../../components/elements/circleAvatar/CircleAvatar';
import { Color } from '../../../../utils/constants';

class MessageTyping extends PureComponent {
  render() {
    const { avatarSize, imageUrl, show } = this.props;

    return (
      <div
        className={`message-typing-container ${
          show ? '' : 'message-typing-hide'
        }`}
      >
        <CircleAvatar
          avatar={imageUrl}
          width={avatarSize}
          height={avatarSize}
        />
        <div className="message-typing-loading">
          <BeatLoader color={Color.BLACK_OPACITY_04} size={8} />
        </div>
      </div>
    );
  }
}

export default MessageTyping;
