import { CHANGE_SYSTEM_COLOR, FETCH_SYSTEM_COLOR } from '../actions/types';
import { Color } from '../utils/constants';

const initialState = Color.BLUE;

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SYSTEM_COLOR:
      return action.payload;
    case CHANGE_SYSTEM_COLOR:
      return action.payload;
    default:
      return state;
  }
}