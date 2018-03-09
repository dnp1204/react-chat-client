import _ from 'lodash';
import React, { Component } from 'react';
import IconWithNextText from '../../../common/icon/IconWithNextText';
import TextAndRightIcon from '../../../common/icon/TextAndRightIcon';
import Dropdown from '../../../common/Dropdown';

class Options extends Component {
  state = { isShowDropdown: false };
  
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
      <div className="tool--section tool--options border-bottom">
        <div className="title">
          <Dropdown className="tool--options__drop-down" 
            isDisplay={this.state.isShowDropdown} 
            onHide={(value) => this.setState({ isShowDropdown: value })}>
            <TextAndRightIcon
              text="Options"
              iconName="ellipsis-h"
              isCursorPointer
              onIconClickHandler={() => this.setState({ isShowDropdown: !this.state.isShowDropdown })}
            />
          </Dropdown>
        </div>
        {this.renderAllIconForTool()}
      </div>
    );
  }
}

export default Options;
