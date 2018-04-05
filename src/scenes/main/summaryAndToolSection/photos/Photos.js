import React, { Component } from 'react';

import BaseComponent from '../BaseComponent';

class Photos extends Component {
  state = { showChild: true };

  render() {
    return (
      <BaseComponent
        componentName="Shared Photos"
        classNameToCustom="tool--photos"
      >
        <div>...</div>
      </BaseComponent>
    );
  }
}

export default Photos;
