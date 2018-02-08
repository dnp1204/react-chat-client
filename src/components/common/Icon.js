import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const { iconName, size, style } = this.props;

    return (
      <div>
        <i style={style} className={`fa fa-${iconName} fa-${size}`} aria-hidden="true"></i>
      </div>
    );
  }
}

Icon.propTypes = {
  iconName: PropTypes.string,
  size: PropTypes.string
}

Icon.defaultProps = {
  size: 'lg',
  style: { color: '#0084FF' }
}

export default Icon;