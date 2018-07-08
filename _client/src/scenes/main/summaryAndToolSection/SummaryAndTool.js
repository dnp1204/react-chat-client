import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SummaryAndTool.scss';
import Icon from '../../../components/elements/icon/Icon';
import { Color } from '../../../utils/constants';
import FriendContainer from '../friendSection/friendContainer/FriendContainer';
import Options from './options/Options';
import Photos from './photos/Photos';
import Dropdown from '../../../components/tools/dropDown/Dropdown';
import { changeShowOptions, changeShowPhotos } from '../../../actions';

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
    const {
      avatar,
      firstName,
      lastName,
      lastSendMessageDate
    } = this.props.selectedFriend;

    const { systemColor, showOptions, showPhotos, showSearch } = this.props;

    return (
      <div id="tool">
        <div className="tool--section tool--header border-bottom">
          <FriendContainer
            nameStyle={{ color: Color.DARK_BLUE }}
            avatar={avatar}
            firstName={firstName}
            lastName={lastName}
            subTitleComponent={
              <p className="light-text">
                {moment(lastSendMessageDate).fromNow(true)}
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
  return { selectedFriend: state.selectFriend };
}

export default connect(
  mapStateToProps,
  {
    changeShowOptions,
    changeShowPhotos
  }
)(SummaryAndTool);
