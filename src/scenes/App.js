import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSystemColor } from '../actions';
import Header from '../components/elements/header/Header';
import Icon from '../components/elements/icon/Icon';
import MultipleIconRow from '../components/elements/icon/MultipleIconRow';
import FriendSection from './main/friendSection/FriendSection';
import MessageSection from './main/messageSection/MessageSection';
import SummaryAndTool from './main/summaryAndToolSection/SummaryAndTool';

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
        <div className="section section__left">
          <Header
            className="first-header"
            classNameForTitle="hide-on-xs"
            leftComponent={
              <Icon
                optionClassName="hide-on-sm"
                isCursorPointer
                iconName="cog"
              />
            }
            title="Messenger"
            rightComponent={<Icon isCursorPointer iconName="pencil-square-o" />}
          />
          <div className="section__left__content">
            <FriendSection />
          </div>
        </div>
        <div className="section section__right">
          <Header
            className="second-header"
            title="Messenger"
            subTitle="Active on Messenger"
            rightComponent={
              <MultipleIconRow className="hide-on-sm" iconArray={iconArray} />
            }
          />
          <div className="section__right__content">
            <div className="message-section border-right">
              <MessageSection />
            </div>
            <div className="hide-on-xs">
              <SummaryAndTool />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchSystemColor })(App);
