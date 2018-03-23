import { Picker } from 'emoji-mart';
import React from 'react';

const EmojiPicker = ({ pickEmoji }) => {
  return (
    <div id="emoji-picker">
      <div id="emoji-picker-nested">
        <Picker
          set="facebook"
          sheetSize={32}
          onClick={(emoji, event) => {
            pickEmoji(emoji.native);
          }}
          perLine={7}
          showPreview={false}
        />
      </div>
    </div>
  );
};

export default EmojiPicker;
