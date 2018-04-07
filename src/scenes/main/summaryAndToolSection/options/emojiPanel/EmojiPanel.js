import React, { PureComponent } from 'react';
import BasePanel from '../BasePanel';
import EmojiPicker from '../../../../../components/elements/emojiPicker/EmojiPicker';

class EmojiPanel extends PureComponent {
  render() {
    return (
      <BasePanel cancelButtonAction={this.props.cancelButtonAction}>
        <div className="change-color-modal-content--color-panel">
          <EmojiPicker />
        </div>
      </BasePanel>
    );
  }
}

export default EmojiPanel;
