import React, { Component } from 'react';
import FriendSection from './layout/FriendSection/FriendSection';
import SummaryAndTool from './layout/ToolSection/SummaryAndTool';
import Header from './common/Header';
import Icon from './common/icon/Icon';
import MultipleIconRow from './common/icon/MultipleIconRow';
import MessageSection from './layout/MessageSection/MessageSection';

class App extends Component {
  render() {
    const iconArray = [
      { iconName: 'phone' },
      { iconName: 'video-camera' },
      { iconName: 'info-circle' }
    ];

    return (
      <div id="app">
        <div id="header-section">
          <Header
            leftComponent={<Icon isCursorPointer iconName="cog" />}
            title="Messenger"
            className={"border-right"}
            rightComponent={<Icon isCursorPointer iconName="pencil-square-o" />}
          />
          <Header
            title="Messenger"
            subTitle="Active on Messenger"
            rightComponent={<MultipleIconRow iconArray={iconArray} />}
          />
        </div>
        <div id="content-section">
          <div className="section">
            <FriendSection />
          </div>
          <div className="section">
            <MessageSection />
          </div>
          <div className="section">
            <SummaryAndTool />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
