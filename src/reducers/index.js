import { combineReducers } from 'redux';
import friendListReducer from './friendListReducer';

export default combineReducers({
  friendList: friendListReducer
});