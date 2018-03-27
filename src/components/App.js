import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSystemColor } from '../actions';
import Header from './common/Header';
import ResizeableColumn from './common/ResizeableColumn';
import Icon from './common/icon/Icon';
import MultipleIconRow from './common/icon/MultipleIconRow';
import FriendSection from './layout/FriendSection/FriendSection';
import MessageSection from './layout/MessageSection/MessageSection';
import SummaryAndTool from './layout/ToolSection/SummaryAndTool';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchSystemColor();
  }
  
  render() {
    const iconArray = [
      { iconName: 'phone' },
      { iconName: 'video-camera' },
      { iconName: 'info-circle' }
    ];

    return (
      <div id="app">
        <div id="header-section">
          <ResizeableColumn maxWidth={window.innerWidth * 3 / 4}>
            <Header
              leftComponent={<Icon isCursorPointer iconName="cog" />}
              title="Messenger"
              rightComponent={<Icon isCursorPointer iconName="pencil-square-o" />}
            />
          </ResizeableColumn>
          <Header
            title="Messenger"
            subTitle="Active on Messenger"
            rightComponent={<MultipleIconRow iconArray={iconArray} />}
          />
        </div>
        <div id="content-section">
          <div className="section friend-section">
            <FriendSection />
          </div>
          <div className="section message-section">
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

export default connect(null, { fetchSystemColor })(App);
