import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  leftComponent,
  rightComponent,
  title,
  subTitle,
  className,
  classNameForTitle
}) => {
  return (
    <div className={`header ${className}`}>
      <div className="header--left">{leftComponent}</div>
      <div className={`header--title ${classNameForTitle}`}>
        <h3>{title}</h3>
        <small className="light-text">{subTitle}</small>
      </div>
      <div className="header--right">{rightComponent}</div>
    </div>
  );
};

Header.propTypes = {
  leftComponent: PropTypes.element,
  rightComponent: PropTypes.element,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string
};

Header.defaultPropTypes = {
  className: ''
};

export default Header;
