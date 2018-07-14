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

      let lastMessage = '';
      if (contents.length > 0) {
        const lastContent = contents[contents.length - 1];
        lastMessage = `${
          this.props.auth.id ===
          (lastContent.sendByUser.id || lastContent.sendByUser)
            ? 'You: '
            : ''
        }${lastContent.content}`;
      }

      return (
        <FriendContainer
          classNameForName={'hide-on-xs'}
          key={id}
          avatar={avatarUrl}
          firstName={firstName}
          lastName={lastName}
          subTitleComponent={
            <p className="light-text hide-on-sm">{lastMessage}</p>
          }
          rightComponent={
            <p className="light-text hide-on-md">
              {moment(updatedAt).calendar(null, {
                sameDay: 'h:mm a',
                lastDay: 'ddd',
                lastWeek: 'ddd',
                thisYear: 'MMM D',
                sameElse: 'M/D/YYYY'
              })}
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
    conversations: state.conversations,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  { selectConversation }
)(FriendSection);
