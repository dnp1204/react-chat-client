import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const renderIconArray = (iconArray) => {
  return _.map(iconArray, icon => {
    return renderIcon(icon);
  });
}

const renderIcon = (icon) => {
  return (
    <Icon key={icon.iconName} isCursorPointer iconName={icon.iconName} />
  );
}

const MultipleIconRow = ({ iconArray }) => {
  return(
    <div className="multiple-icon-row">
      {renderIconArray(iconArray)}
    </div>
  );
}

MultipleIconRow.propTypes = {
  iconArray: PropTypes.array
}

export default MultipleIconRow;