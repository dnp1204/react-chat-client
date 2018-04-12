import './MessageSearch.scss';
import React, { Component } from 'react';

import Search from '../../../../components/elements/search/Search';
import Icon from '../../../../components/elements/icon/Icon';
import NoBorderButton from '../../../../components/elements/button/noBorderButton/NoBorderButton';

class MessageSearch extends Component {
  render() {
    const iconStyle = { opacity: 0.6 };

    return (
      <div className="message-section__search flex--row align__center justify--space__between border-bottom">
        <div className="align__center search-box-container flex--row">
          <Icon iconName="angle-up" style={iconStyle} />
          <Icon iconName="angle-down" style={iconStyle} />
          <Search className="search-box-container--search-box" />
        </div>
        <NoBorderButton text="Done" />
      </div>
    );
  }
}

export default MessageSearch;
