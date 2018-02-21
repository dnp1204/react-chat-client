import { combineReducers } from 'redux';
import friendListReducer from './friendListReducer';
import selectFriendReducer from './selectFriendReducer';

export default combineReducers({
  friendList: friendListReducer,
  selectFriend: selectFriendReducer
});