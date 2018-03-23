import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const multipleIconRowStyle = { display: 'flex', flexDirection: 'row' };
const iconStyle = { marginLeft: 20 };

const renderIconArray = iconArray => {
  return _.map(iconArray, icon => {
    return renderIcon(icon);
  });
};

const renderIcon = ({ iconName, size, style, color, showComponentWhenClick }) => {
  return (
    <Icon
      key={iconName}
      isCursorPointer
      iconName={iconName}
      size={size}
      color={color}
      style={Object.assign({}, style, iconStyle)}
      showComponentWhenClick={showComponentWhenClick}
    />
  );
};

const MultipleIconRow = ({ iconArray }) => {
  return (
    <div style={multipleIconRowStyle} className="multiple-icon-row">
      {renderIconArray(iconArray)}
    </div>
  );
};

MultipleIconRow.propTypes = {
  iconArray: PropTypes.array.isRequired,
  size: PropTypes.object,
  style: PropTypes.object,
  color: PropTypes.string
};

export default MultipleIconRow;
