import React from 'react';

import { Color } from '../utilities/constants';
import Icon from './icon/Icon';

const Search = ({ iconName, placeholder }) => {
  return (
    <div className="search">
      <div className="search--icon">
        <Icon color={Color.BLACK_OPACITY_03} iconName={iconName} size="sm" />
      </div>
      <input placeholder={placeholder} />
    </div>
  )
}

export default Search;