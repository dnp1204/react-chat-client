import React from 'react';
import { Picker } from 'emoji-mart';

const EmojiPicker = () => {
    return (
        <div id="emoji-picker">
          <div id="emoji-picker-nested">
            <Picker set='emojione' />
          </div>
        </div>
    );
}

export default EmojiPicker;