import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../../../components/elements/search/Search';
import FriendContainer from './friendContainer/FriendContainer';
import { selectFriend } from '../../../actions';

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
          classNameForName={'hide-on-xs'}
          key={_id}
          avatar={avatar}
          firstName={firstName}
          lastName={lastName}
          subTitleComponent={
            <p className="light-text hide-on-sm">{lastMessage}</p>
          }
          rightComponent={
            <p className="light-text hide-on-md">
              {moment(lastSendMessageDate).fromNow(true)}
            </p>
          }
          onSelectFriend={() => this.props.selectFriend(friend)}
          isActive={this.props.selectedFriend._id === _id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Search
          className="hide-on-sm"
          iconName="search"
          placeholder="Search Messenger"
        />
        {this.renderFriendList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { friendList: state.friendList, selectedFriend: state.selectFriend };
}

export default connect(mapStateToProps, { selectFriend })(FriendSection);
