import { combineReducers } from 'redux';
import friendListReducer from './friendListReducer';
import selectFriendReducer from './selectFriendReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
  friendList: friendListReducer,
  selectFriend: selectFriendReducer,
  friendMessages: messagesReducer
});