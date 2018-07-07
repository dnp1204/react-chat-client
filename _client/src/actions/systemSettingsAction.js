import { Color } from '../utils/constants';
import {
  CHANGE_SYSTEM_COLOR,
  CHANGE_SHOW_OPTIONS,
  CHANGE_SHOW_PHOTOS,
  CHANGE_SYSTEM_EMOJI,
  CHANGE_SHOW_SUMMARY_AND_TOOL_SECTION,
  CHANGE_SHOW_SEARCH_INPUT,
  FETCH_SYSTEM_SETTINGS
} from './types';

const initialState = {
  systemColor: Color.BLUE,
  showOptions: true,
  showPhotos: false,
  showSearch: false,
  selectedEmoji: {
    id: '+1',
    native: '👍'
  },
  showSummaryAndToolSection: true
};

export const fetchSystemSettings = () => async dispatch => {
  dispatch({ type: FETCH_SYSTEM_SETTINGS, payload: initialState });
};

export const changeSystemColor = color => async dispatch => {
  dispatch({ type: CHANGE_SYSTEM_COLOR, payload: color });
};

export const changeShowOptions = isShow => async dispatch => {
  dispatch({ type: CHANGE_SHOW_OPTIONS, payload: isShow });
};

export const changeShowPhotos = isShow => async dispatch => {
  dispatch({ type: CHANGE_SHOW_PHOTOS, payload: isShow });
};

export const changeSelectedEmoji = (emojiId, emojiNative) => async dispatch => {
  dispatch({ type: CHANGE_SYSTEM_EMOJI, payload: { emojiId, emojiNative } });
};

export const changeShowSummaryAndToolSection = isShow => async dispatch => {
  dispatch({ type: CHANGE_SHOW_SUMMARY_AND_TOOL_SECTION, payload: isShow });
};

export const changeShowSearchInput = isShow => async dispatch => {
  dispatch({ type: CHANGE_SHOW_SEARCH_INPUT, payload: isShow });
};
