import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import friendListReducer from './friendListReducer';
import messagesReducer from './messagesReducer';
import selectFriendReducer from './selectFriendReducer';
import systemSettingsReducer from './systemSettingsReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  friendList: friendListReducer,
  friendMessages: messagesReducer,
  selectFriend: selectFriendReducer,
  systemSettings: systemSettingsReducer
});
