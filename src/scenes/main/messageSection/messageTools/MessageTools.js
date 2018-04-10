import React, { Component } from 'react';
import { Emoji } from 'emoji-mart';

import EmojiPicker from '../../../../components/elements/emojiPicker/EmojiPicker';
import MultipleIconRow from '../../../../components/elements/icon/MultipleIconRow';
import Recorder from '../../../../components/elements/recorder/Recorder';
import { Color } from '../../../../utils/constants.js';

class MessageTools extends Component {
  renderIconPicker() {
    return <EmojiPicker pickEmoji={emojiId => this.props.pickEmoji(emojiId)} />;
  }

  renderRecorder() {
    return <Recorder />;
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
      {
        iconName: 'microphone',
        size,
        color,
        showComponentWhenClick: this.renderRecorder()
      },
      { iconName: 'camera', size, color }
    ];

    return (
      <div className="message-section--tool flex--row align__center justify--space__between">
        <MultipleIconRow iconArray={iconArray} hasDropdown />
        <div className="cursor-pointer">
          <Emoji
            emoji={{ id: this.props.selectedEmojiId }}
            size={24}
            onClick={() => this.props.onClickSelectedEmoji()}
          />
        </div>
      </div>
    );
  }
}

export default MessageTools;
