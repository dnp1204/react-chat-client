import React, { Component } from 'react';

import BaseComponent from '../BaseComponent';

class Photos extends Component {
  render() {
    const { isShow, onIconClickHandler } = this.props;
    
    return (
      <BaseComponent
         onIconClickHandler={isShow => onIconClickHandler(isShow)}
        showChild={isShow}
        componentName="Shared Photos"
        classNameToCustom="tool--photos"
      >
        <div>...</div>
      </BaseComponent>
    );
  }
}

export default Photos;
