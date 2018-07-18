import './SummaryAndTool.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeShowOptions, changeShowPhotos } from '../../../actions';
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
      systemColor,
      showOptions,
      showPhotos,
      showSearch,
      conversations
    } = this.props;
    const {
      selectedConversation,
      selectedConversation: { users }
    } = conversations;
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
          showSearch={showSearch}
          systemColor={systemColor}
          isShow={showOptions}
          onIconClickHandler={show =>
            this.props.changeShowOptions(selectedConversation.setting.id, show)
          }
        />
        <Photos
          systemColor={systemColor}
          isShow={showPhotos}
          onIconClickHandler={show =>
            this.props.changeShowPhotos(selectedConversation.setting.id, show)
          }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { conversations: state.conversations };
}

export default connect(
  mapStateToProps,
  {
    changeShowOptions,
    changeShowPhotos
  }
)(SummaryAndTool);
