import { SELECT_FRIEND } from '../actions/types';

export default function(state = 0, action) {
  switch (action.type) {
    case SELECT_FRIEND:
      return action.payload;
    default:
      return state;
  }
}