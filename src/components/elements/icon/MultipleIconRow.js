import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../../common/Dropdown';
import Icon from './Icon';

const multipleIconRowStyle = { display: 'flex', flexDirection: 'row' };
const iconStyle = { marginLeft: 20 };

const renderIconArray = (hasDropdown, iconArray) => {
  return _.map(iconArray, icon => {
    if (hasDropdown) {
      return renderIconWithDropdown(icon);
    }
    return renderIcon(icon);
  });
};

const renderIcon = ({ iconName, size, style, color }) => {
  return (
    <Icon
      key={iconName}
      isCursorPointer
      iconName={iconName}
      size={size}
      color={color}
      style={Object.assign({}, style, iconStyle)}
    />
  );
};

const renderIconWithDropdown = ({
  iconName,
  size,
  style,
  color,
  showComponentWhenClick
}) => {
  return (
    <Dropdown
      hideWhenClickOnDropDown={false}
      key={iconName}
      renderDropdownComponent={showComponentWhenClick}
    >
      <Icon
        key={iconName}
        isCursorPointer
        iconName={iconName}
        size={size}
        color={color}
        style={Object.assign({}, style, iconStyle)}
      />
    </Dropdown>
  );
};

const MultipleIconRow = ({ iconArray, hasDropdown, className }) => {
  return (
    <div
      style={multipleIconRowStyle}
      className={`multiple-icon-row ${className}`}
    >
      {renderIconArray(hasDropdown, iconArray)}
    </div>
  );
};

MultipleIconRow.propTypes = {
  iconArray: PropTypes.array.isRequired,
  size: PropTypes.object,
  style: PropTypes.object,
  color: PropTypes.string,
  hasDropdown: PropTypes.bool
};

MultipleIconRow.defaultProps = {
  hasDropdown: false
};

export default MultipleIconRow;
