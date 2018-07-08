import PropTypes from 'prop-types';
import React from 'react';

import { Color } from '../../../utils/constants';
import Icon from '../icon/Icon';
import './Search.scss';

const Search = ({ iconName, placeholder, className, textStyle, iconType }) => {
  return (
    <div className={`search ${className}`}>
      <div className="search--icon">
        <Icon
          color={Color.BLACK_OPACITY_03}
          iconName={iconName}
          size="sm"
          iconType={iconType}
        />
      </div>
      <input style={Object.assign({}, textStyle)} placeholder={placeholder} />
    </div>
  );
};

Search.propTypes = {
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  placeholder: PropTypes.string,
  textStyle: PropTypes.object
};

Search.defaultProps = {
  iconName: 'search',
  iconType: 'solid',
  placeholder: 'Search messages'
};

export default Search;
