import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MainScene.scss';
import {
  fetchSystemSettings,
  changeShowSummaryAndToolSection
} from '../../actions';
import Header from '../../components/elements/header/Header';
import Icon from '../../components/elements/icon/Icon';
import MultipleIconRow from '../../components/elements/icon/MultipleIconRow';
import FriendSection from './friendSection/FriendSection';
import MessageSection from './messageSection/MessageSection';
import SummaryAndTool from './summaryAndToolSection/SummaryAndTool';

class MainScene extends Component {
  componentDidMount() {
    this.props.fetchSystemSettings();
  }

  render() {
    const {
      systemColor,
      showOptions,
      showPhotos,
      showSearch,
      showSummaryAndToolSection
    } = this.props.systemSettings;
    const iconArray = [
      { iconName: 'phone', color: systemColor },
      { iconName: 'video-camera', color: systemColor },
      {
        iconName: 'info-circle',
        color: systemColor,
        onClickHandler: () => {
          this.props.changeShowSummaryAndToolSection(
            !showSummaryAndToolSection
          );
        }
      }
    ];

    let toolStyle = {};
    if (!showSummaryAndToolSection) {
      toolStyle = { visibility: 'hidden' };
    }

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
                color={systemColor}
              />
            }
            title="Messenger"
            rightComponent={
              <Icon
                isCursorPointer
                iconName="pencil-square-o"
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
            title="Messenger"
            subTitle="Active on Messenger"
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
              <MessageSection systemColor={systemColor} />
            </div>
            <div style={toolStyle} className="hide-on-xs">
              <SummaryAndTool
                systemColor={systemColor}
                showOptions={showOptions}
                showPhotos={showPhotos}
                showSearch={showSearch}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { systemSettings: state.systemSettings };
}

export default connect(
  mapStateToProps,
  {
    fetchSystemSettings,
    changeShowSummaryAndToolSection
  }
)(MainScene);
