import axios from 'axios';
import {
  SELECT_CONVERSATION,
  NEW_MESSAGE,
  FRIEND_ONLINE,
  FRIEND_OFFLINE,
  LOADING,
  FETCH_CONVERSATION_SETTINGS
} from './types';

export const selectConversation = conversationId => async dispatch => {
  // dispatch({ type: LOADING, payload: true });
  try {
    const request = await axios.get(`/api/conversation/${conversationId}`);
    dispatch({ type: SELECT_CONVERSATION, payload: request.data });
    dispatch({
      type: FETCH_CONVERSATION_SETTINGS,
      payload: request.data.setting
    });
  } catch (err) {
    console.log(err);
  } finally {
    dispatch({ type: LOADING, payload: false });
  }
};

export const receiveMessage = data => {
  return { type: NEW_MESSAGE, payload: data };
};

export const friendGoOnline = data => {
  return { type: FRIEND_ONLINE, payload: data };
};

export const friendGoOffline = data => {
  return { type: FRIEND_OFFLINE, payload: data };
};

export const uploadImage = files => async dispatch => {
  let formData = new FormData();

  for (const file of files) {
    formData.append('images', file, file.name);
  }

  try {
    const request = await axios.post('/api/image/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(request.data);
  } catch (err) {
    console.log(err);
  }

  return dispatch({ type: 'haha', payload: {} });
};
