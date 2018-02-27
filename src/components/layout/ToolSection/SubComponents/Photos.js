import React from 'react';
import TextAndRightIcon from '../../../common/icon/TextAndRightIcon';

const Photos = () => {
  return (
    <div className="tool--section tool--photos">
      <div className="title">
        <TextAndRightIcon
          text="Photos"
          iconName="ellipsis-h"
          isCursorPointer
        />
      </div>
    </div>
  );
};

export default Photos;
