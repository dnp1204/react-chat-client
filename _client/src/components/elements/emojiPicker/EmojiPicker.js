import { Picker } from 'emoji-mart';
import PropTypes from 'prop-types';
import React from 'react';

const EmojiPicker = ({
  pickEmoji,
  setName,
  sheetSize,
  perLine,
  showPreview
}) => {
  return (
    <div id="emoji-picker">
      <div id="emoji-picker-nested">
        <Picker
          set={setName}
          sheetSize={32}
          onClick={(emoji, event) => {
            pickEmoji(emoji.native);
          }}
          perLine={perLine}
          showPreview={showPreview}
          style={{ paddingBottom: 8 }}
        />
      </div>
    </div>
  );
};

EmojiPicker.propTypes = {
  pickEmoji: PropTypes.func.isRequired,
  setName: PropTypes.string,
  sheetSize: PropTypes.number,
  perLine: PropTypes.number,
  showPreview: PropTypes.bool
};

EmojiPicker.defaultProps = {
  setName: 'facebook',
  sheetSize: 32,
  perLine: 7,
  showPreview: false
};

export default EmojiPicker;
