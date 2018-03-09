import React, { Component } from 'react';
import TextAndRightIcon from '../../../common/icon/TextAndRightIcon';
import Dropdown from '../../../common/Dropdown';

class Photos extends Component {
  state = { isShowDropdown: false };
  
  render() {
    return (
      <div className="tool--section tool--photos">
        <div className="title">
          <TextAndRightIcon
            text="Shared Photos"
            iconName="ellipsis-h"
            isCursorPointer
            onIconClickHandler={() => this.setState({ isShowDropdown: !this.state.isShowDropdown })}
          />
          
        </div>
      </div>
    );
  }
}

export default Photos;
