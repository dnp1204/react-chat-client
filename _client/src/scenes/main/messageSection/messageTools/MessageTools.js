import React, { Component } from 'react';
import { Emoji } from 'emoji-mart';

import EmojiPicker from '../../../../components/elements/emojiPicker/EmojiPicker';
import MultipleIconRow from '../../../../components/elements/icon/MultipleIconRow';
import Recorder from '../../../../components/elements/recorder/Recorder';
import { Color } from '../../../../utils/constants.js';
import Camera from '../../../../components/elements/camera/Camera';

class MessageTools extends Component {
  renderIconPicker() {
    return <EmojiPicker pickEmoji={emojiId => this.props.pickEmoji(emojiId)} />;
  }

  renderRecorder() {
    return <Recorder />;
  }

  renderCamera() {
    return (
      <div style={{ width: 430, height: 430 }}>
        <Camera width={400} height={400} />
      </div>
    );
  }

  renderImagePicker() {
    return (
      <input
        style={{ display: 'none' }}
        type="file"
        title="Add Files"
        accept="image/*"
        id="image-picker"
      />
    );
  }

  onImageIconClick() {
    const element = document.getElementById('image-picker');
    element.click();
  }

  render() {
    const color = Color.BLACK_OPACITY_03;
    const size = 'lg';
    const iconArray = [
      {
        iconName: 'file-image',
        size,
        color,
        showComponentWhenClick: this.renderImagePicker(),
        componentIsDropdown: false,
        onClickHandler: this.onImageIconClick.bind(this),
        type: 'regular'
      },
      {
        iconName: 'smile',
        size,
        color,
        showComponentWhenClick: this.renderIconPicker(),
        componentIsDropdown: true,
        iconType: 'regular'
      },
      {
        iconName: 'microphone',
        size,
        color,
        showComponentWhenClick: this.renderRecorder(),
        componentIsDropdown: true,
        iconType: 'solid'
      },
      {
        iconName: 'camera',
        size,
        color,
        showComponentWhenClick: this.renderCamera(),
        componentIsDropdown: false,
        iconType: 'solid',
        componentOpenModal: true
      }
    ];

    const { pickSelectedEmojiId, selectedEmojiId } = this.props;

    return (
      <div className="message-section--tool flex--row align__center justify--space__between">
        <MultipleIconRow iconArray={iconArray} />
        <div className="cursor-pointer">
          <Emoji
            onClick={data => pickSelectedEmojiId(data)}
            emoji={{ id: selectedEmojiId }}
            size={24}
          />
        </div>
      </div>
    );
  }
}

export default MessageTools;
