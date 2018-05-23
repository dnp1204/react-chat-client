import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Color } from '../../../utils/constants';

class Icon extends Component {
  render() {
    const {
      iconName,
      size,
      style,
      isCursorPointer,
      color,
      onClickHandler,
      optionClassName
    } = this.props;

    return (
      <div id="icon" onClick={() => onClickHandler()}>
        <i
          style={{ ...style, color }}
          className={`fa fa-${iconName} fa-${size} ${
            isCursorPointer ? 'cursor-pointer' : ''
          } ${optionClassName}`}
          aria-hidden="true"
        />
      </div>
    );
  }
}

Icon.propTypes = {
  iconName: PropTypes.string,
  size: PropTypes.string,
  isCursorPointer: PropTypes.bool,
  color: PropTypes.string,
  optionClassName: PropTypes.string,
  onClickHandler: PropTypes.func
};

Icon.defaultProps = {
  size: '2x',
  color: Color.BLUE,
  isCursorPointer: false,
  onClickHandler: () => {},
  optionClassName: ''
};

export default Icon;
