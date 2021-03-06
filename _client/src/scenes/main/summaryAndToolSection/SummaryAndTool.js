import './SummaryAndTool.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  changeShowOptions,
  changeShowPhotos,
  changeShowSearchInput,
  changeSystemColor,
  changeSelectedEmoji
} from '../../../actions';
import Icon from '../../../components/elements/icon/Icon';
import Dropdown from '../../../components/tools/dropDown/Dropdown';
import { Color } from '../../../utils/constants';
import FriendContainer from '../friendSection/friendContainer/FriendContainer';
import Options from './options/Options';
import Photos from './photos/Photos';
import OnlineTime from '../../../components/elements/online-time/OnlineTime';

class SummaryAndTool extends Component {
  renderDropDownComponent() {
    return (
      <ul className="user-setting">
        <li className="cursor-pointer">
          <a href="/api/signout">Sign Out</a>
        </li>
      </ul>
    );
  }

  renderRightComponentForToolHeader() {
    let dropdownComponent = this.renderDropDownComponent();
    return (
      <div>
        <Dropdown
          hideWhenClickOnDropDown
          renderDropdownComponent={dropdownComponent}
        >
          <Icon
            iconName="cog"
            color={Color.BLACK_OPACITY_03}
            size="lg"
            isCursorPointer
            iconType="solid"
          />
        </Dropdown>
      </div>
    );
  }

  render() {
    const {
      changeSelectedEmoji,
      changeShowSearchInput,
      changeSystemColor,
      conversations,
      socket,
      ui,
      user: { systemSetting }
    } = this.props;
    const {
      showOptions,
      showPhotos,
      showSearch,
      emojiIdsForOptions
    } = ui.systemSettings;
    const { systemColor } = ui.conversationSettings;
    const { users } = conversations.selectedConversation;
    const {
      avatarUrl,
      firstName,
      lastName,
      isOnline,
      lastTimeOnline
    } = users[0];

    return (
      <div id="tool">
        <div className="tool--section tool--header border-bottom">
          <FriendContainer
            nameStyle={{ color: Color.DARK_BLUE }}
            avatar={avatarUrl}
            firstName={firstName}
            lastName={lastName}
            subTitleComponent={
              <OnlineTime isOnline={isOnline} lastTimeOnline={lastTimeOnline} />
            }
            isHover={false}
            rightComponent={this.renderRightComponentForToolHeader()}
          />
        </div>
        <Options
          changeSelectedEmoji={changeSelectedEmoji}
          changeShowSearchInput={changeShowSearchInput}
          changeSystemColor={changeSystemColor}
          conversations={conversations}
          emojiIdsForOptions={emojiIdsForOptions}
          isShow={showOptions}
          showSearch={showSearch}
          socket={socket}
          systemColor={systemColor}
          onIconClickHandler={show =>
            this.props.changeShowOptions(systemSetting.id, show)
          }
        />
        <Photos
          systemColor={systemColor}
          isShow={showPhotos}
          onIconClickHandler={show =>
            this.props.changeShowPhotos(systemSetting.id, show)
          }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    conversations: state.conversations,
    socket: state.socket,
    ui: state.ui,
    user: state.auth
  };
}

export default connect(
  mapStateToProps,
  {
    changeShowOptions,
    changeShowPhotos,
    changeShowSearchInput,
    changeSystemColor,
    changeSelectedEmoji
  }
)(SummaryAndTool);
