import React, { Component } from 'react';
import Header from '../../common/Header';
import Icon from '../../common/Icon';
import MultipleIconRow from '../../common/MultipleIconRow';

class MessageSection extends Component {
  render() {
    const iconArray = [{ iconName: 'phone' }, { iconName: 'video-camera' }, { iconName: 'info-circle' }];

    return (
      <div className="message">
        <Header
          title="Messenger"
          subTitle="Active on Messenger"
          rightComponent={<MultipleIconRow iconArray={iconArray} />} />
      </div>
    );
  }
}

export default MessageSection;