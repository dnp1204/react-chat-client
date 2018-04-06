import { Color } from '../utils/constants';
import { CHANGE_SYSTEM_COLOR, CHANGE_SHOW_OPTIONS, CHANGE_SHOW_PHOTOS, FETCH_SYSTEM_SETTINGS } from './types';

const initialState = {
  systemColor: Color.BLUE,
  showOptions: true,
  showPhotos: false
};

export const fetchSystemSettings = () => async dispatch => {
  dispatch({ type: FETCH_SYSTEM_SETTINGS, payload: initialState });
}

export const changeSystemColor = (color) => async dispatch => {
  dispatch({ type: CHANGE_SYSTEM_COLOR, payload: color });
}

export const changeShowOptions = (isShow) => async dispatch => {
  dispatch({ type: CHANGE_SHOW_OPTIONS, payload: isShow });
}

export const changeShowPhotos = (isShow) => async dispatch => {
  dispatch({ type: CHANGE_SHOW_PHOTOS, payload: isShow });
}