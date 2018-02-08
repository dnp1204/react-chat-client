import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ leftComponent, rightComponent, title, subTitle }) => {
  return (
    <div className="header">
      <div>
        {leftComponent}
      </div>
      <div className="header--title">
        <h3>{title}</h3>
        <small className="light-text">{subTitle}</small>
      </div>
      <div>
        {rightComponent}
      </div>
    </div>
  );
}

Header.propTypes = {
  leftComponent: PropTypes.element,
  rightComponent: PropTypes.element,
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

export default Header;