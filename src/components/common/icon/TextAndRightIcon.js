import React from 'react';
import Icon from './Icon';

const TextAndRightIcon = ({ text, iconName, isCursorPointer}) => {
  return (
    <div className="flex--row align__center justify--space__between">
      <p className="light-text">{text}</p>
      <Icon style={{color: 'black'}} iconName={iconName} isCursorPointer size='lg' />
    </div>
  );
}

export default TextAndRightIcon;