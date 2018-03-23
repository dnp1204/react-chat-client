import _ from 'lodash';
import React, { Component } from 'react';
import IconWithNextText from '../../../common/icon/IconWithNextText';
import TextAndRightIcon from '../../../common/icon/TextAndRightIcon';

class Options extends Component {
  
  state = { showChild: true }
  
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
          <TextAndRightIcon
            text="Options"
            iconName="chevron-down"
            isCursorPointer
            iconClassName={this.state.showChild ? "move-down-90deg-animation" : "move-left-90deg-animation"}
            onIconClickHandler={() => this.setState({ showChild: !this.state.showChild })}
          />
        </div>
        <div className="children">
          {this.state.showChild ? this.renderAllIconForTool() : <div />}  
        </div>
      </div>
    );
  }
}

export default Options;
