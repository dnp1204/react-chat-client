import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

class TextAndRightIcon extends Component {
  render() {
    const { text, iconName, isCursorPointer} = this.props;
    
    return (
      <div className="flex--row align__center justify--space__between">
        <p className="light-text">{text}</p>
        <Icon color='rgba(0, 0, 0, 0.4)' iconName={iconName} isCursorPointer size='lg' />
      </div>
    );
  }
}

TextAndRightIcon.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  isCursorPointer: PropTypes.bool
}

export default TextAndRightIcon;