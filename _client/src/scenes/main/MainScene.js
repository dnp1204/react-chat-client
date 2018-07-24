import './MainScene.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  changeShowSummaryAndToolSection,
  changeSystemColor,
  setSocket
} from '../../actions';
import Header from '../../components/elements/header/Header';
import Icon from '../../components/elements/icon/Icon';
import MultipleIconRow from '../../components/elements/icon/MultipleIconRow';
import OnlineTime from '../../components/elements/online-time/OnlineTime';
import { socketEvent } from '../../utils/constants';
import FriendSection from './friendSection/FriendSection';
import MessageSection from './messageSection/MessageSection';
import SummaryAndTool from './summaryAndToolSection/SummaryAndTool';

class MainScene extends Component {
  componentDidMount() {
    const {
      socket,
      changeSystemColor,
      conversations: { selectedConversation }
    } = this.props;
    socket.on(socketEvent.NEW_SYSTEM_COLOR, data => {
      changeSystemColor(selectedConversation.setting.id, data);
    });
  }

  render() {
    const {
      user: { systemSetting },
      ui,
      conversations: { selectedConversation }
    } = this.props;
    const { users } = selectedConversation;
    const { fullName, isOnline, lastTimeOnline } = users[0];
    const { showSummaryAndToolSection } = ui.systemSettings;
    const { systemColor } = ui.conversationSettings;
    const iconArray = [
      // { iconName: 'phone', iconType: 'solid', color: systemColor },
      { iconName: 'video', iconType: 'solid', color: systemColor },
      {
        iconName: 'info-circle',
        iconType: 'solid',
        color: systemColor,
        onClickHandler: () => {
          this.props.changeShowSummaryAndToolSection(
            systemSetting.id,
            !showSummaryAndToolSection
          );
        }
      }
    ];

    return (
      <div id="main">
        <div className="section section__left">
          <Header
            className="first-header"
            classNameForTitle="hide-on-xs"
            leftComponent={
              <Icon
                optionClassName="hide-on-sm"
                isCursorPointer
                iconName="cog"
                iconType="solid"
                color={systemColor}
              />
            }
            title="Messenger"
            rightComponent={
              <Icon
                isCursorPointer
                iconName="edit"
                iconType="regular"
                color={systemColor}
              />
            }
          />
          <div className="section__left__content">
            <FriendSection />
          </div>
        </div>
        <div className="section section__right">
          <Header
            className="second-header"
            title={fullName}
            subTitleComponent={
              <OnlineTime
                small
                isOnline={isOnline}
                lastTimeOnline={lastTimeOnline}
              />
            }
            rightComponent={
              <MultipleIconRow className="hide-on-sm" iconArray={iconArray} />
            }
          />
          <div
            className={`section__right__content ${
              showSummaryAndToolSection
                ? 'section__right__content--two-columns'
                : 'section__right__content--one-columns'
            }`}
          >
            <div className="message-section border-right">
              <MessageSection />
            </div>
            <div
              style={
                showSummaryAndToolSection
                  ? { visibility: 'visible' }
                  : { visibility: 'hidden' }
              }
              className="hide-on-xs"
            >
              <SummaryAndTool />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth,
    ui: state.ui,
    conversations: state.conversations,
    socket: state.socket
  };
}

export default connect(
  mapStateToProps,
  {
    changeSystemColor,
    changeShowSummaryAndToolSection,
    setSocket
  }
)(MainScene);
