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
      iconType,
      optionClassName
    } = this.props;

    let type = 'far';
    if (iconType === 'solid') {
      type = 'fas';
    } else if (iconType === 'bold') {
      type = 'fab';
    }

    return (
      <div id="icon" onClick={() => onClickHandler()}>
        <i
          style={{ ...style, color }}
          className={`${type} fa-${iconName} fa-${size} ${
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
  iconType: PropTypes.string,
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
  optionClassName: '',
  iconType: 'regular'
};

export default Icon;
