import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import uiReducer from './uiReducer';
import conversationReducer from './conversationReducer';
import { SET_SOCKET } from '../actions/types';
import messageReducer from './messageReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  ui: uiReducer,
  conversations: conversationReducer,
  message: messageReducer,
  socket: (state = null, action) => {
    switch (action.type) {
      case SET_SOCKET:
        return action.payload;
      default:
        return state;
    }
  }
});
