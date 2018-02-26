import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendContainer from '../FriendSection/SubComponents/FriendContainer';

class SummaryAndTool extends Component {
  render() {
    return (
      <div>
        <div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedFriend: state.selectFriend };
}

export default connect(mapStateToProps)(SummaryAndTool);