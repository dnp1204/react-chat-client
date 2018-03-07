import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const { iconName, size, style, isCursorPointer, color } = this.props;

    return (
      <div id="icon">
        <i
          style={{ ...style, color}}
          className={`fa fa-${iconName} fa-${size} ${
            isCursorPointer ? 'cursor-pointer' : ''
          }`}
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
  color: PropTypes.string
};

Icon.defaultProps = {
  size: '2x',
  color: '#0084FF',
  isCursorPointer: false
};

export default Icon;
