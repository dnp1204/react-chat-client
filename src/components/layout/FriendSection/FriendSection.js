import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../../common/Search';
import FriendContainer from './SubComponents/FriendContainer';

class FriendSection extends Component {
  renderFriendList() {
    return _.map(this.props.friendList, friend => {
      const {
        _id,
        avatar,
        firstName,
        lastName,
        lastMessage,
        lastSendMessageDate
      } = friend;
      return (
        <FriendContainer
          id={_id}
          avatar={avatar}
          firstName={firstName}
          lastName={lastName}
          lastMessage={lastMessage}
          lastSendMessageDate={lastSendMessageDate}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Search iconName="search" placeholder="Search Messenger" />
        {this.renderFriendList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { friendList: state.friendList };
}

export default connect(mapStateToProps)(FriendSection);
