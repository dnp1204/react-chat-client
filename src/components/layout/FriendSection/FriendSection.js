import React, { Component } from 'react';
import Header from '../../common/Header';
import Icon from '../../common/Icon';

class FriendSection extends Component {
  render() {
    return (
      <div>
        <Header
          leftComponent={<Icon iconName="cog" size="2x" />}
          title="Messenger"
          subTitle="Active on Messenger"
          rightComponent={<Icon iconName="pencil-square-o" size="2x" />} />
      </div>
    );
  }
}

export default FriendSection;