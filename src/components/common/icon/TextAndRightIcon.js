import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const TextAndRightIcon = ({ text, iconName, isCursorPointer, onIconClickHandler }) => {
  return (
    <div className="flex--row align__center justify--space__between">
      <p className="light-text">{text}</p>
      <Icon onClickHandler={() => onIconClickHandler()} color='rgba(0, 0, 0, 0.4)' iconName={iconName} isCursorPointer={isCursorPointer} size='lg' />
    </div>
  );
}

TextAndRightIcon.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  isCursorPointer: PropTypes.bool,
  onIconClickHandler: PropTypes.func
}

TextAndRightIcon.defaultProps = {
  onIconClickHandler: () => {}
}

export default TextAndRightIcon;