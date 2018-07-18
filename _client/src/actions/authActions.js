import axios from 'axios';

import {
  FETCH_CONVERSATION_LIST,
  FETCH_SYSTEM_SETTINGS,
  FETCH_USER,
  LOADING,
  SEND_ERROR_NOTIFICATION,
  SEND_SUCCESS_NOTIFICATION
} from './types';

const getUserAndConversations = async dispatch => {
  try {
    let request = await axios.get(`/api/getUser`);
    dispatch({ type: FETCH_USER, payload: request.data });
    const { conversations } = request.data;

    if (conversations.length > 0) {
      const id = conversations[0].id;
      request = await axios.get(`/api/conversation/${id}`);
    }
    dispatch({
      type: FETCH_CONVERSATION_LIST,
      payload: { conversations, selectedConversation: request.data }
    });
    dispatch({ type: FETCH_SYSTEM_SETTINGS, payload: request.data.setting });
  } catch (err) {
  } finally {
    dispatch({ type: LOADING, payload: false });
  }
};

export const login = (data, callback) => async dispatch => {
  dispatch({ type: LOADING, payload: true });
  try {
    await axios.post(`/api/login`, data);
    getUserAndConversations(dispatch);
    callback();
  } catch (err) {
    const { response } = JSON.parse(JSON.stringify(err));
    dispatch({
      type: SEND_ERROR_NOTIFICATION,
      payload: response.data.message
    });
    dispatch({ type: LOADING, payload: false });
  }
};

export const signUp = (data, callback) => async dispatch => {
  dispatch({ type: LOADING, payload: true });

  try {
    await axios.post(`/api/signup`, data);
    callback();
    dispatch({
      type: SEND_SUCCESS_NOTIFICATION,
      payload:
        'Your account was created successfully. Please check your email to activate before logging in!'
    });
  } catch (err) {
    console.log(err);
  } finally {
    dispatch({ type: LOADING, payload: false });
  }
};

export const fetchUser = () => async dispatch => {
  dispatch({ type: LOADING, payload: true });
  getUserAndConversations(dispatch);
};
