import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../../common/Search';

class FriendSection extends Component {
  render() {
    console.log(this.props.friendList);
    return (
      <div>
        <Search iconName="search" placeholder="Search Messenger" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { friendList: state.friendList };
}

export default connect(mapStateToProps)(FriendSection);