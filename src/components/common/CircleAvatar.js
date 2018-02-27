import React from 'react';
import PropTypes from 'prop-types';

const CircleAvatar = ({ avatar }) => {
  return <img className="circle-avatar" src={avatar} alt={avatar} />;
};

CircleAvatar.propTypes = {
  avatar: PropTypes.string
};

export default CircleAvatar;
