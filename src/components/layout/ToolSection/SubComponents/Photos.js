import React, { Component } from 'react';
import BaseComponent from './BaseComponent';

class Photos extends Component {
  
  state = { showChild: true }
  
  render() {
    return (
      <BaseComponent usedBySubComponent="tool--photos">
        <div>Hello</div>
      </BaseComponent>
    );
  }
}

export default Photos;
