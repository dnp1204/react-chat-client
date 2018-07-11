import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import systemSettingsReducer from './systemSettingsReducer';
import uiReducer from './uiReducer';
import conversationReducer from './conversationReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  systemSettings: systemSettingsReducer,
  ui: uiReducer,
  conversations: conversationReducer
});
