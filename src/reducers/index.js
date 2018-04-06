import { combineReducers } from 'redux';

import systemSettingsReducer from './systemSettingsReducer';
import friendListReducer from './friendListReducer';
import messagesReducer from './messagesReducer';
import selectFriendReducer from './selectFriendReducer';

export default combineReducers({
  friendList: friendListReducer,
  selectFriend: selectFriendReducer,
  friendMessages: messagesReducer,
  systemSettings: systemSettingsReducer
});