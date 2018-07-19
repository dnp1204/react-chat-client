import axios from 'axios';

import {
  CHANGE_SHOW_OPTIONS,
  CHANGE_SHOW_PHOTOS,
  CHANGE_SHOW_SEARCH_INPUT,
  CHANGE_SHOW_SUMMARY_AND_TOOL_SECTION,
  CHANGE_SYSTEM_COLOR,
  CHANGE_SYSTEM_EMOJI,
  FETCH_SYSTEM_SETTINGS
} from './types';

const CONVERSATION_URL = '/api/conversation-setting';
const SYSTEM_URL = '/api/system';

export const fetchSystemSettings = systemSettingId => async dispatch => {
  try {
    const request = await axios.get(`${SYSTEM_URL}/${systemSettingId}`);
    dispatch({ type: FETCH_SYSTEM_SETTINGS, payload: request.data });
  } catch (err) {
    console.log(err);
  }
};

export const changeSystemColor = (
  conversationSettingId,
  color
) => async dispatch => {
  try {
    const request = await axios.post(
      `${CONVERSATION_URL}/${conversationSettingId}`,
      {
        systemColor: color
      }
    );
    dispatch({ type: CHANGE_SYSTEM_COLOR, payload: request.data.systemColor });
  } catch (err) {
    console.log(err);
  }
};

export const changeShowOptions = (
  systemSettingId,
  isShow
) => async dispatch => {
  try {
    const request = await axios.post(`${SYSTEM_URL}/${systemSettingId}`, {
      showOptions: isShow
    });
    dispatch({ type: CHANGE_SHOW_OPTIONS, payload: request.data.showOptions });
  } catch (err) {
    console.log(err);
  }
};

export const changeShowPhotos = (systemSettingId, isShow) => async dispatch => {
  try {
    const request = await axios.post(`${SYSTEM_URL}/${systemSettingId}`, {
      showPhotos: isShow
    });
    dispatch({ type: CHANGE_SHOW_PHOTOS, payload: request.data.showPhotos });
  } catch (err) {
    console.log(err);
  }
};

export const changeSelectedEmoji = (emojiId, emojiNative) => async dispatch => {
  dispatch({ type: CHANGE_SYSTEM_EMOJI, payload: { emojiId, emojiNative } });
};

export const changeShowSummaryAndToolSection = (
  systemSettingId,
  isShow
) => async dispatch => {
  try {
    const request = await axios.post(`${SYSTEM_URL}/${systemSettingId}`, {
      showSummaryAndToolSection: isShow
    });
    dispatch({
      type: CHANGE_SHOW_SUMMARY_AND_TOOL_SECTION,
      payload: request.data.showSummaryAndToolSection
    });
  } catch (err) {
    console.log(err);
  }
};

export const changeShowSearchInput = isShow => async dispatch => {
  dispatch({ type: CHANGE_SHOW_SEARCH_INPUT, payload: isShow });
};
