import './EmojiPanel.scss';

import React, { PureComponent } from 'react';
import BasePanel from '../BasePanel';
import { Picker } from 'emoji-mart';

class EmojiPanel extends PureComponent {
  render() {
    return (
      <BasePanel cancelButtonAction={this.props.cancelButtonAction}>
        <div className="modal-content--main">
          <Picker
            set="facebook"
            sheetSize={64}
            emojiSize={26}
            onClick={(emoji, event) => {
              console.log(emoji.native);
            }}
            perLine={7}
            showPreview={false}
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
