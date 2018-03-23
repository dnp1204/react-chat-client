import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const TextAndRightIcon = ({ text, iconName, isCursorPointer, onIconClickHandler, iconClassName }) => {
  return (
    <div className="flex--row align__center justify--space__between">
      <p className="light-text">{text}</p>
      <Icon optionClassName={iconClassName} onClickHandler={() => onIconClickHandler()} color='rgba(0, 0, 0, 0.4)' iconName={iconName} isCursorPointer={isCursorPointer} size='lg' />
    </div>
  );
}

TextAndRightIcon.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconClassName: PropTypes.string,
  isCursorPointer: PropTypes.bool,
  onIconClickHandler: PropTypes.func
}

TextAndRightIcon.defaultProps = {
  onIconClickHandler: () => {},
  iconClassName: ""
}

export default TextAndRightIcon;