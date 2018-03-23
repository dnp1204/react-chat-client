import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';

class Icon extends Component {
  
  render() {
    const { iconName, size, style, isCursorPointer, color, onClickHandler, optionClassName, showComponentWhenClick } = this.props;

    return (
      <div id="icon" onClick={() => onClickHandler()}>
        <Dropdown renderDropdownComponent={showComponentWhenClick}>
          <i
            style={{ ...style, color }}
            className={`fa fa-${iconName} fa-${size} ${
              isCursorPointer ? 'cursor-pointer' : ''
            } ${optionClassName}`}
            aria-hidden="true"
          />
        </Dropdown>
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
  color: '#0084FF',
  isCursorPointer: false,
  onClickHandler: () => {},
  optionClassName: ""
};

export default Icon;
