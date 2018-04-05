import React from 'react';

import { Color } from '../../../utils/constants';
import Icon from '../icon/Icon';

const Search = ({ iconName, placeholder, className }) => {
  return (
    <div className={`search ${className}`}>
      <div className="search--icon">
        <Icon color={Color.BLACK_OPACITY_03} iconName={iconName} size="sm" />
      </div>
      <input placeholder={placeholder} />
    </div>
  );
};

export default Search;
