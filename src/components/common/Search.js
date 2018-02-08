import React from 'react';
import Icon from './icon/Icon';

const Search = ({ iconName, placeholder }) => {
  return (
    <div className="search">
      <div className="search--icon">
        <Icon style={{ color: 'rgba(0, 0, 0, 0.3)' }} iconName={iconName} size="sm" />
      </div>
      <input placeholder={placeholder} />
    </div>
  )
}

export default Search;