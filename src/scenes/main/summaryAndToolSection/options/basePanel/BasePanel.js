import './BasePanel.scss';

import React, { PureComponent } from 'react';
import NoBorderButton from '../../../../../components/elements/button/noBorderButton/NoBorderButton';

class BasePanel extends PureComponent {
  render() {
    const { title, text, cancelButtonAction } = this.props;

    return (
      <div className="modal-content-container">
        <h3>{title}</h3>
        <p>{text}</p>
        {this.props.children}
        <NoBorderButton
          text="Cancel"
          style={{ float: 'right' }}
          buttonClickAction={() => cancelButtonAction()}
        />
      </div>
    );
  }
}

export default BasePanel;
