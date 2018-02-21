import React from 'react';
import PropTypes from 'prop-types';

const SquareAvatar = ({ avatar }) => {
  return <img className="square-avatar" src={avatar} alt={avatar} />;
};

SquareAvatar.propTypes = {
  avatar: PropTypes.string
}

export default SquareAvatar;
