import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const { iconName, size, style, isCursorPointer } = this.props;

    return (
      <div>
        <i style={style} className={`fa fa-${iconName} fa-${size} ${isCursorPointer ? 'cursor-pointer' : '' }`} aria-hidden="true"></i>
      </div>
    );
  }
}

Icon.propTypes = {
  iconName: PropTypes.string,
  size: PropTypes.string,
  isCursorPointer: PropTypes.bool
}

Icon.defaultProps = {
  size: '2x',
  style: { color: '#0084FF' },
  isCursorPointer: false
}

export default Icon;