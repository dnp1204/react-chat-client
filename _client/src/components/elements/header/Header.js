import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({
  leftComponent,
  rightComponent,
  title,
  subTitle,
  subTitleComponent,
  className,
  classNameForTitle
}) => {
  return (
    <div className={`header ${className}`}>
      <div className="header--left">{leftComponent}</div>
      <div className={`header--title ${classNameForTitle}`}>
        <h3>{title}</h3>
        {subTitle ? (
          <small className="light-text">{subTitle}</small>
        ) : (
          subTitleComponent
        )}
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
  subTitleComponent: PropTypes.element,
  className: PropTypes.string
};

Header.defaultPropTypes = {
  className: ''
};

export default Header;
