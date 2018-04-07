import './ColorsPanel.scss';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { changeSystemColor } from '../../../../../actions';
import NoBorderButton from '../../../../../components/elements/button/noBorderButton/NoBorderButton';
import { Color } from '../../../../../utils/constants';

class ColorsPanel extends PureComponent {
  renderColors(colors) {
    return colors.map(color => {
      return (
        <div
          key={color}
          className={`color-element ${
            this.props.systemColor === color ? 'active' : ''
          }`}
          style={{ backgroundColor: color }}
          onClick={() => {
            this.props.changeSystemColor(color);
            this.props.cancelButtonAction();
          }}
        />
      );
    });
  }

  renderColorsChoice(colorRows) {
    return colorRows.map((row, index) => {
      return (
        <div
          key={index}
          className="flex--row justify--space__between color-row"
        >
          {this.renderColors(row)}
        </div>
      );
    });
  }

  render() {
    const colorRow1 = [
      Color.BLUE,
      Color.PELOROUS,
      Color.AMBER,
      Color.CORAL_RED,
      Color.CAN_CAN
    ];
    const colorRow2 = [
      Color.DANUBE,
      Color.MALACHITE,
      Color.CRUSTA,
      Color.TONYS_PINK,
      Color.ELECTRIC_VIOLET
    ];
    const colorRow3 = [
      Color.BRIGHT_TURQUOISE,
      Color.FERN,
      Color.CONCORD,
      Color.HOT_PINK,
      Color.BLUE_BELL
    ];
    const color = [colorRow1, colorRow2, colorRow3];

    return (
      <div className="change-color-modal-content">
        <h3>Pick a color for this conversation</h3>
        <p>Every one in this conversation will see this</p>
        <div className="change-color-modal-content--color-panel">
          {this.renderColorsChoice(color)}
        </div>
        <NoBorderButton
          text="Cancel"
          style={{ float: 'right' }}
          buttonClickAction={() => this.props.cancelButtonAction()}
        />
      </div>
    );
  }
}

export default connect(null, { changeSystemColor })(ColorsPanel);