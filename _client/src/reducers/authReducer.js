import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
