import React from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../../../utils/constants';

const NoBorderButton = ({ text, style, buttonClickAction }) => {
  const buttonStyle = {
    border: 'none',
    color: Color.BLUE,
    outline: 'none',
    cursor: 'pointer'
  };
  return (
    <button
      className="no-border-button"
      style={Object.assign({}, style, buttonStyle)}
      onClick={() => buttonClickAction()}
    >
      {text}
    </button>
  );
};

NoBorderButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  buttonClickAction: PropTypes.func
};

NoBorderButton.defaultProps = {
  buttonClickAction: () => {}
};

export default NoBorderButton;
