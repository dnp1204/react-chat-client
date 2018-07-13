import './SummaryAndTool.scss';

import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeShowOptions, changeShowPhotos } from '../../../actions';
import Icon from '../../../components/elements/icon/Icon';
import Dropdown from '../../../components/tools/dropDown/Dropdown';
import { Color } from '../../../utils/constants';
import FriendContainer from '../friendSection/friendContainer/FriendContainer';
import Options from './options/Options';
import Photos from './photos/Photos';

class SummaryAndTool extends Component {
  renderDropDownComponent() {
    return (
      <ul className="user-setting">
        <li className="cursor-pointer">Placeholder</li>
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
    const { systemColor, showOptions, showPhotos, showSearch } = this.props;
    const { selectedConversation } = this.props.conversations;
    const { users } = selectedConversation;
    const {
      avatarUrl,
      firstName,
      lastName,
      isOnline,
      lastTimeOnline
    } = users[0];

    moment.updateLocale('en', {
      relativeTime: {
        ss: '%d seconds',
        mm: '%d minutes',
        hh: '%d hours',
        dd: '%d days',
        MM: '%d months'
      }
    });

    return (
      <div id="tool">
        <div className="tool--section tool--header border-bottom">
          <FriendContainer
            nameStyle={{ color: Color.DARK_BLUE }}
            avatar={avatarUrl}
            firstName={firstName}
            lastName={lastName}
            subTitleComponent={
              <p className="light-text">
                {isOnline
                  ? 'Active Now'
                  : `Active ${moment(lastTimeOnline).fromNow()}`}
              </p>
            }
            isHover={false}
            rightComponent={this.renderRightComponentForToolHeader()}
          />
        </div>
        <Options
          showSearch={showSearch}
          systemColor={systemColor}
          isShow={showOptions}
          onIconClickHandler={show => this.props.changeShowOptions(show)}
        />
        <Photos
          systemColor={systemColor}
          isShow={showPhotos}
          onIconClickHandler={show => this.props.changeShowPhotos(show)}
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
