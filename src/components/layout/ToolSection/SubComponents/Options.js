import _ from 'lodash';
import React, { Component } from 'react';
import IconWithNextText from '../../../common/icon/IconWithNextText';
import BaseComponent from './BaseComponent';

class Options extends Component {
  
  renderAllIconForTool() {
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

    render() {
      return (
        <BaseComponent usedBySubComponent="tool--options" isNeededBorderBottom={true}>
          {this.renderAllIconForTool()}
        </BaseComponent>
    );
  }
}

export default Options;
