import React from 'react';
import PropTypes from 'prop-types';

const CircleAvatar = ({
  avatar,
  width,
  height
}) => {
  return ( <
    img style = {
      {
        width,
        height,
        borderRadius: 50,
        backgroundColor: '#000'
      }
    }
    className = "circle-avatar"
    src = {
      avatar
    }
    alt = "avatar" /
    >
  );
};

CircleAvatar.propTypes = {
  avatar: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

CircleAvatar.defaultProps = {
  width: 55,
  height: 55
};

export default CircleAvatar;