import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../../../components/elements/search/Search';
import FriendContainer from './friendContainer/FriendContainer';
import { selectConversation } from '../../../actions';

class FriendSection extends Component {
  renderFriendList() {
    const { conversations, selectedConversation } = this.props.conversations;

    return _.map(conversations, conversation => {
      const { id, users, updatedAt, contents } = conversation;
      const { avatarUrl, firstName, lastName } = users[0];

      return (
        <FriendContainer
          classNameForName={'hide-on-xs'}
          key={id}
          avatar={avatarUrl}
          firstName={firstName}
          lastName={lastName}
          subTitleComponent={
            <p className="light-text hide-on-sm">{contents[0] || ''}</p>
          }
          rightComponent={
            <p className="light-text hide-on-md">
              {moment(updatedAt).fromNow(true)}
            </p>
          }
          onSelectFriend={() => this.props.selectConversation(id)}
          isActive={selectedConversation.id === id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Search
          className="hide-on-sm"
          placeholder="Search Messenger"
          textStyle={{ textAlign: 'center', textIndent: 0 }}
        />
        {this.renderFriendList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    conversations: state.conversations
  };
}

export default connect(
  mapStateToProps,
  { selectConversation }
)(FriendSection);
