import { Color } from '../components/utilities/constants';
import { CHANGE_SYSTEM_COLOR, FETCH_SYSTEM_COLOR } from './types';

export const fetchSystemColor = () => async dispatch => {
  dispatch({ type: FETCH_SYSTEM_COLOR, payload: Color.BLUE });
}

export const changeSystemColor = (color) => async dispatch => {
  dispatch({ type: CHANGE_SYSTEM_COLOR, payload: color });
}