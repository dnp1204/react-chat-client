import React, { Component } from 'react';
import Header from '../../common/Header';
import Icon from '../../common/Icon';
import Search from '../../common/Search';

class FriendSection extends Component {
  render() {
    return (
      <div>
        <Header
          leftComponent={<Icon isCursorPointer iconName="cog" size="2x" />}
          title="Messenger"
          subTitle="Active on Messenger"
          rightComponent={<Icon isCursorPointer iconName="pencil-square-o" size="2x" />} />
          <Search iconName="search" placeholder="Search Messenger" />
      </div>
    );
  }
}

export default FriendSection;