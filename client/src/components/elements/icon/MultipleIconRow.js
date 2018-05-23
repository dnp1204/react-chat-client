import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../../tools/dropDown/Dropdown';
import Icon from './Icon';

const multipleIconRowStyle = { display: 'flex', flexDirection: 'row' };
const iconStyle = { marginLeft: 20 };

const renderIconArray = iconArray => {
  return _.map(iconArray, icon => {
    if (icon.componentIsDropdown) {
      return renderIconWithDropdown(icon);
    }
    return renderIcon(icon);
  });
};

const renderIcon = ({
  iconName,
  size,
  style,
  color,
  showComponentWhenClick,
  onClickHandler
}) => {
  return (
    <div key={iconName}>
      <Icon
        isCursorPointer
        iconName={iconName}
        size={size}
        color={color}
        style={Object.assign({}, style, iconStyle)}
        onClickHandler={onClickHandler ? onClickHandler : () => {}}
      />
      {showComponentWhenClick}
    </div>
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

const MultipleIconRow = ({ iconArray, className }) => {
  return (
    <div
      style={multipleIconRowStyle}
      className={`multiple-icon-row ${className}`}
    >
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

MultipleIconRow.defaultProps = {};

export default MultipleIconRow;
