import PropTypes from 'prop-types';
import React from 'react';

import Icon from './Icon';

const IconWithNextText = ({
  iconName,
  iconColor,
  isCursorPointer,
  text,
  onClickHandler
}) => {
  const textStyle = { marginLeft: 20 };

  return (
    <div
      onClick={() => onClickHandler()}
      id="icon-with-next-text"
      className={`${
        isCursorPointer ? 'cursor-pointer' : ''
      } flex--row align__center`}
    >
      <Icon
        style={{ width: 20, height: 20 }}
        color={iconColor}
        iconName={iconName}
        isCursorPointer
        size="lg"
      />
      <p style={textStyle}>{text}</p>
    </div>
  );
};

IconWithNextText.propTypes = {
  iconName: PropTypes.string,
  isCursorPointer: PropTypes.bool,
  text: PropTypes.string,
  iconColor: PropTypes.string,
  onClickHandler: PropTypes.func
};

IconWithNextText.defaultProps = {
  onClickHandler: () => {}
};

export default IconWithNextText;
