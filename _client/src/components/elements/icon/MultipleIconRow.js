import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../../tools/dropDown/Dropdown';
import Icon from './Icon';
import CustomModal from '../../hoc/modal/Modal';

const multipleIconRowStyle = { display: 'flex', flexDirection: 'row' };
const iconStyle = { marginLeft: 20 };

const renderIconArray = iconArray => {
  return _.map(iconArray, icon => {
    if (icon.componentIsDropdown) {
      return renderIconWithDropdown(icon);
    }

    if (icon.componentOpenModal) {
      return renderIconWithModal(icon);
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
  onClickHandler,
  iconType
}) => {
  return (
    <div key={iconName}>
      <Icon
        isCursorPointer
        iconName={iconName}
        iconType={iconType}
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
  showComponentWhenClick,
  iconType
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
        iconType={iconType}
        size={size}
        color={color}
        style={Object.assign({}, style, iconStyle)}
      />
    </Dropdown>
  );
};

const renderIconWithModal = ({
  iconName,
  size,
  style,
  color,
  showComponentWhenClick,
  iconType
}) => {
  return (
    <CustomModal
      key={iconName}
      render={onClickToShowModal => (
        <div onClick={() => onClickToShowModal()}>
          <Icon
            key={iconName}
            isCursorPointer
            iconName={iconName}
            iconType={iconType}
            size={size}
            color={color}
            style={Object.assign({}, style, iconStyle)}
          />
        </div>
      )}
      renderModalContent={hideModal => showComponentWhenClick}
    />
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
