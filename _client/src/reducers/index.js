import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import uiReducer from './uiReducer';
import conversationReducer from './conversationReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  ui: uiReducer,
  conversations: conversationReducer
});
