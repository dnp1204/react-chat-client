import './MessageSearch.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeShowSearchInput } from '../../../../actions';

import Search from '../../../../components/elements/search/Search';
import Icon from '../../../../components/elements/icon/Icon';
import NoBorderButton from '../../../../components/elements/button/noBorderButton/NoBorderButton';

class MessageSearch extends Component {
  render() {
    const { customWidth, changeShowSearchInput } = this.props;
    const iconStyle = { opacity: 0.6 };

    return (
      <div
        style={{ width: customWidth }}
        className="message-section__search flex--row align__center justify--space__between border-bottom"
      >
        <div className="align__center justify--space__between search-box-container flex--row">
          <Icon
            isCursorPointer
            iconName="angle-up"
            iconType="solid"
            style={iconStyle}
          />
          <Icon
            isCursorPointer
            iconName="angle-down"
            iconType="solid"
            style={iconStyle}
          />
          <Search className="search-box-container--search-box" />
        </div>
        <NoBorderButton
          text="Done"
          buttonClickAction={() => changeShowSearchInput(false)}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { changeShowSearchInput }
)(MessageSearch);
