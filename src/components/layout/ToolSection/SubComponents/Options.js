import _ from 'lodash';
import React from 'react';
import IconWithNextText from '../../../common/icon/IconWithNextText';
import TextAndRightIcon from '../../../common/icon/TextAndRightIcon';

const renderAllIconForTool = () => {
  const iconTools = [
    {
      iconName: 'search',
      isCursorPointer: true,
      text: 'Search in Conversation'
    },
    { iconName: 'paint-brush', isCursorPointer: true, text: 'Change Color' },
    { iconName: 'smile-o', isCursorPointer: true, text: 'Change Emoji' }
  ];

  return _.map(iconTools, icon => {
    const { iconName, isCursorPointer, text } = icon;
    return (
      <div key={iconName} className="element">
        <IconWithNextText
          iconName={iconName}
          isCursorPointer={isCursorPointer}
          text={text}
        />
      </div>
    );
  });
}

const Options = () => {
  return (
    <div className="tool--section tool--options border-bottom">
      <div className="title">
        <TextAndRightIcon
          text="Options"
          iconName="ellipsis-h"
          isCursorPointer
        />
      </div>
      {renderAllIconForTool()}
    </div>
  );
};

export default Options;
