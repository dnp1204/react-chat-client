import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../../common/Search';
import FriendContainer from './SubComponents/FriendContainer';
import { selectFriend } from '../.././../actions';

class FriendSection extends Component {
  renderFriendList() {
    return _.map(this.props.friendList, friend => {
      const {
        _id,
        avatar,
        firstName,
        lastName,
        lastMessage,
        lastSendMessageDate,
      } = friend;
      return (
        <FriendContainer
          key={_id}
          id={_id}
          avatar={avatar}
          firstName={firstName}
          lastName={lastName}
          lastMessage={lastMessage}
          lastSendMessageDate={lastSendMessageDate}
          onSelectFriend={(id) => this.props.selectFriend(id)}
          selectedFriendId={this.props.selectedFriend}
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
  return { friendList: state.friendList, selectedFriend: state.selectFriend };
}

export default connect(mapStateToProps, { selectFriend })(FriendSection);
