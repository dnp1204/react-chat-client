import { combineReducers } from 'redux';

import colorSystemReducer from './colorSystemReducer';
import friendListReducer from './friendListReducer';
import messagesReducer from './messagesReducer';
import selectFriendReducer from './selectFriendReducer';

export default combineReducers({
  friendList: friendListReducer,
  selectFriend: selectFriendReducer,
  friendMessages: messagesReducer,
  systemColor: colorSystemReducer
});