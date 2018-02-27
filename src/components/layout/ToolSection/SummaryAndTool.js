import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendContainer from '../FriendSection/SubComponents/FriendContainer';
import Options from './SubComponents/Options';

class SummaryAndTool extends Component {
  render() {
    const {
      avatar,
      firstName,
      lastName,
      lastSendMessageDate
    } = this.props.selectedFriend;

    return (
      <div id="tool">
        <div className="tool--section tool--header border-bottom">
          <FriendContainer
            avatar={avatar}
            firstName={firstName}
            lastName={lastName}
            subTitleComponent={
              <p className="light-text">
                {moment(lastSendMessageDate).fromNow(true)}
              </p>
            }
            isHover={false}
          />
        </div>
        <Options />
        <div className="tool--section tool-photos" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedFriend: state.selectFriend };
}

export default connect(mapStateToProps)(SummaryAndTool);
