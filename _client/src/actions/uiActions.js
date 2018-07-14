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

const URL = '/api/system';

export const fetchSystemSettings = id => async dispatch => {
  try {
    const request = await axios.get(`${URL}/${id}`);
    dispatch({ type: FETCH_SYSTEM_SETTINGS, payload: request.data });
  } catch (err) {
    console.log(err);
  }
};

export const changeSystemColor = (id, color) => async dispatch => {
  try {
    const request = await axios.post(`${URL}/${id}`, { systemColor: color });
    dispatch({ type: CHANGE_SYSTEM_COLOR, payload: request.data.systemColor });
  } catch (err) {
    console.log(err);
  }
};

export const changeShowOptions = (id, isShow) => async dispatch => {
  try {
    const request = await axios.post(`${URL}/${id}`, { showOptions: isShow });
    dispatch({ type: CHANGE_SHOW_OPTIONS, payload: request.data.showOptions });
  } catch (err) {
    console.log(err);
  }
};

export const changeShowPhotos = (id, isShow) => async dispatch => {
  try {
    const request = await axios.post(`${URL}/${id}`, { showPhotos: isShow });
    dispatch({ type: CHANGE_SHOW_PHOTOS, payload: request.data.showPhotos });
  } catch (err) {
    console.log(err);
  }
};

export const changeSelectedEmoji = (emojiId, emojiNative) => async dispatch => {
  dispatch({ type: CHANGE_SYSTEM_EMOJI, payload: { emojiId, emojiNative } });
};

export const changeShowSummaryAndToolSection = (
  id,
  isShow
) => async dispatch => {
  try {
    const request = await axios.post(`${URL}/${id}`, {
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
