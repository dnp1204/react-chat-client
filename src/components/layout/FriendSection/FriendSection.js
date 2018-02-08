import React, { Component } from 'react';
import Header from '../../common/Header';
import Icon from '../../common/icon/Icon';
import Search from '../../common/Search';

class FriendSection extends Component {
  render() {
    return (
      <div>
        <Header
          leftComponent={<Icon isCursorPointer iconName="cog" />}
          title="Messenger"
          rightComponent={<Icon isCursorPointer iconName="pencil-square-o" />} />
        <Search iconName="search" placeholder="Search Messenger" />
      </div>
    );
  }
}

export default FriendSection;