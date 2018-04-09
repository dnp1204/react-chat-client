import './BasePanel.scss';

import React, { PureComponent } from 'react';
import NoBorderButton from '../../../../components/elements/button/noBorderButton/NoBorderButton';

class BasePanel extends PureComponent {
  render() {
    return (
      <div className="modal-content-container">
        <h3>Pick a color for this conversation</h3>
        <p>Every one in this conversation will see this</p>
        {this.props.children}
        <NoBorderButton
          text="Cancel"
          style={{ float: 'right' }}
          buttonClickAction={() => this.props.cancelButtonAction()}
        />
      </div>
    );
  }
}

export default BasePanel;
