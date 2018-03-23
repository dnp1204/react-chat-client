import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from '../EmojiPicker';

class Icon extends Component {
  renderShowComponentWhenClickIcon() {
    if (this.props.iconName === "smile-o" & this.props.color === 'rgba(0, 0, 0, 0.3)') {
      return (
        <EmojiPicker />
      );
    }
  }
  
  render() {
    const { iconName, size, style, isCursorPointer, color, onClickHandler, optionClassName } = this.props;

    return (
      <div id="icon" onClick={() => onClickHandler()}>
        {this.renderShowComponentWhenClickIcon()}
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
  color: '#0084FF',
  isCursorPointer: false,
  onClickHandler: () => {},
  optionClassName: ""
};

export default Icon;
