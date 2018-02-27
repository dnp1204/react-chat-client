import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const IconWithNextText = ({ iconName, isCursorPointer, text }) => {
  return (
    <div
      id="icon-with-next-text"
      className={`${
        isCursorPointer ? 'cursor-pointer' : ''
      } flex--row align__center`}
    >
      <Icon iconName={iconName} isCursorPointer size='lg' />
      <p>{text}</p>
    </div>
  );
};

IconWithNextText.propTypes = {
  iconName: PropTypes.string,
  isCursorPointer: PropTypes.bool,
  text: PropTypes.string
}

export default IconWithNextText;
