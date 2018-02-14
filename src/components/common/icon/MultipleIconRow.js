import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const renderIconArray = (iconArray) => {
  return _.map(iconArray, icon => {
    return renderIcon(icon);
  });
}

const renderIcon = ({ iconName, size, style }) => {
  return (
    <Icon key={iconName} isCursorPointer iconName={iconName} size={size} style={style} />
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