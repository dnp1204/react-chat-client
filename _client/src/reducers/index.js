import { combineReducers } from 'redux';

import authReducer from './authReducer';
import systemSettingsReducer from './systemSettingsReducer';
import friendListReducer from './friendListReducer';
import messagesReducer from './messagesReducer';
import selectFriendReducer from './selectFriendReducer';

export default combineReducers({
  friendList: friendListReducer,
  selectFriend: selectFriendReducer,
  friendMessages: messagesReducer,
  systemSettings: systemSettingsReducer,
  auth: authReducer
});