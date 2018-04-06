import _ from 'lodash';
import React, { Component } from 'react';

import IconWithNextText from '../../../../components/elements/icon/IconWithNextText';
import BaseComponent from '../BaseComponent';

class Options extends Component {
  renderAllIconForTool() {
    const iconTools = [
      {
        iconName: 'search',
        isCursorPointer: true,
        text: 'Search in Conversation'
      },
      { iconName: 'pencil', isCursorPointer: true, text: 'Edit Nicknames' },
      { iconName: 'paint-brush', isCursorPointer: true, text: 'Change Color' },
      { iconName: 'smile-o', isCursorPointer: true, text: 'Change Emoji' }
    ];

    return _.map(iconTools, icon => {
      const { iconName, isCursorPointer, text } = icon;
      return (
        <div key={iconName} className="element">
          <IconWithNextText
            iconColor={this.props.systemColor}
            iconName={iconName}
            isCursorPointer={isCursorPointer}
            text={text}
          />
        </div>
      );
    });
  }

  render() {
    const { isShow, onIconClickHandler } = this.props;
    
    return (
      <BaseComponent
        onIconClickHandler={isShow => onIconClickHandler(isShow)}
        showChild={isShow}
        componentName="Options"
        classNameToCustom="tool--options"
        isNeededBorderBottom={true}
      >
        {this.renderAllIconForTool()}
      </BaseComponent>
    );
  }
}

export default Options;
