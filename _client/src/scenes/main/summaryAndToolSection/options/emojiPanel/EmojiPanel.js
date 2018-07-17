import './EmojiPanel.scss';

import React, { PureComponent } from 'react';
import { Picker } from 'emoji-mart';

import BasePanel from '../basePanel/BasePanel';

class EmojiPanel extends PureComponent {
  render() {
    const title = 'Pick an emoji for this conversation';
    const text = 'Everyone in this conversation will see this';
    const {
      emojiIdsForOptions,
      cancelButtonAction,
      changeSelectedEmoji
    } = this.props;

    return (
      <BasePanel
        title={title}
        text={text}
        cancelButtonAction={cancelButtonAction}
      >
        <div className="modal-content--main">
          <Picker
            set="facebook"
            sheetSize={64}
            emojiSize={26}
            onClick={emoji => {
              changeSelectedEmoji(emoji);
              cancelButtonAction();
            }}
            perLine={7}
            showPreview={false}
            recent={emojiIdsForOptions}
            exclude={[
              'recent',
              'search',
              'flags',
              'symbols',
              'objects',
              'places',
              'nature',
              'activity',
              'foods'
            ]}
            style={{ position: 'static' }}
          />
        </div>
      </BasePanel>
    );
  }
}

export default EmojiPanel;
