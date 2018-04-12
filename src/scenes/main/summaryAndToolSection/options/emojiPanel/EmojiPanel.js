import './EmojiPanel.scss';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'emoji-mart';

import BasePanel from '../BasePanel';
import { changeSelectedEmoji } from '../../../../../actions';

class EmojiPanel extends PureComponent {
  render() {
    const { emojiIdsForOptions } = this.props.systemSettings;

    return (
      <BasePanel cancelButtonAction={this.props.cancelButtonAction}>
        <div className="modal-content--main">
          <Picker
            set="facebook"
            sheetSize={64}
            emojiSize={26}
            onClick={(emoji, event) => {
              this.props.changeSelectedEmoji(emoji.id, emoji.native);
              this.props.cancelButtonAction();
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

function mapStateToProps(state) {
  return { systemSettings: state.systemSettings };
}

export default connect(mapStateToProps, { changeSelectedEmoji })(EmojiPanel);
