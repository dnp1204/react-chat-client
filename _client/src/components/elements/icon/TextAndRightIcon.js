import PropTypes from 'prop-types';
import React from 'react';

import { Color } from '../../../utils/constants';
import Icon from './Icon';

const TextAndRightIcon = ({
  text,
  iconName,
  iconType,
  isCursorPointer,
  onIconClickHandler,
  iconClassName
}) => {
  return (
    <div className="flex--row align__center justify--space__between">
      <p className="light-text">{text}</p>
      <Icon
        optionClassName={iconClassName}
        onClickHandler={() => onIconClickHandler()}
        color={Color.BLACK_OPACITY_04}
        iconName={iconName}
        isCursorPointer={isCursorPointer}
        size="2x"
        iconType={iconType}
      />
    </div>
  );
};

TextAndRightIcon.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  iconClassName: PropTypes.string,
  isCursorPointer: PropTypes.bool,
  onIconClickHandler: PropTypes.func
};

TextAndRightIcon.defaultProps = {
  onIconClickHandler: () => {},
  iconClassName: ''
};

export default TextAndRightIcon;
