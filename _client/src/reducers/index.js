import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import messagesReducer from './messagesReducer';
import systemSettingsReducer from './systemSettingsReducer';
import uiReducer from './uiReducer';
import conversationReducer from './conversationReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  friendMessages: messagesReducer,
  systemSettings: systemSettingsReducer,
  ui: uiReducer,
  conversations: conversationReducer
});
