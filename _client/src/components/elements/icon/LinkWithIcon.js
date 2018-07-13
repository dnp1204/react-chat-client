import React from 'react';
import Icon from './Icon';
import './LinkWithIcon.scss';

const LinkWithIcon = ({ href, iconName, iconType, text, backgroundColor }) => {
  const linkStyle = {
    backgroundColor,
    borderRadius: '5px',
    color: '#fff'
  };

  return (
    <a style={linkStyle} className="link-with-icon primary" href={href}>
      <Icon iconName={iconName} iconType={iconType} size="lg" color="#fff" />
      <div>{text}</div>
    </a>
  );
};

export default LinkWithIcon;
