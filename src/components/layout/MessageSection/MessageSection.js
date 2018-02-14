import React, { Component } from 'react';
import Header from '../../common/Header';
import MultipleIconRow from '../../common/icon/MultipleIconRow';
import ConversationAndMessageInput from './sub-section/ConversationAndMessageInput';
import SummaryAndTool from './sub-section/SummaryAndTool';

class MessageSection extends Component {
  render() {
    const iconArray = [{ iconName: 'phone' }, { iconName: 'video-camera' }, { iconName: 'info-circle' }];

    return (
      <div className="message">
        <Header
          title="Messenger"
          subTitle="Active on Messenger"
          rightComponent={<MultipleIconRow iconArray={iconArray} />} />
          <div className="message--content">
            <ConversationAndMessageInput />
            <div className="border-right" />
            <SummaryAndTool />
          </div>
      </div>
    );
  }
}

export default MessageSection;