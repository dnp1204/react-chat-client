import React, { Component } from 'react';
import TextAndRightIcon from '../../../common/icon/TextAndRightIcon';

class Photos extends Component {
  
  state = { showChild: true }
  
  render() {
    return (
      <div className="tool--section tool--photos">
        <div className="title">
          <TextAndRightIcon
            text="Shared Photos"
            iconName="chevron-down"
            isCursorPointer
            iconClassName={this.state.showChild ? "move-down-90deg-animation" : "move-left-90deg-animation"}
            onIconClickHandler={() => this.setState({ showChild: !this.state.showChild })}
          />
        </div>
        <div className="children">
          
        </div>
      </div>
    );
  }
}

export default Photos;
