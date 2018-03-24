import React, { Component } from 'react';

import EmojiPicker from '../../../common/EmojiPicker';
import MultipleIconRow from '../../../common/icon/MultipleIconRow';
import { Color } from '../../../utilities/constants';

class MessageTools extends Component {
  renderIconPicker() {
    return <EmojiPicker pickEmoji={(emojiId) => this.props.pickEmoji(emojiId)} />;
  }

  render() {
    const color = Color.BLACK_OPACITY_03;
    const size = 'lg';
    const iconArray = [
      { iconName: 'file-image-o', size, color },
      {
        iconName: 'smile-o',
        size,
        color,
        showComponentWhenClick: this.renderIconPicker()
      },
      { iconName: 'microphone', size, color },
      { iconName: 'camera', size, color }
    ];

    return (
      <div className="message-section--tool">
        <MultipleIconRow iconArray={iconArray} hasDropdown />
      </div>
    );
  }
}

export default MessageTools;
