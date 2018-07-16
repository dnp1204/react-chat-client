import axios from 'axios';

import {
  FETCH_CONVERSATION_LIST,
  FETCH_SYSTEM_SETTINGS,
  FETCH_USER,
  LOADING,
  LOGIN_ERROR
} from './types';

const getUserAndConversations = async dispatch => {
  try {
    let request = await axios.get(`/api/getUser`);
    dispatch({ type: FETCH_USER, payload: request.data });
    const { conversations, systemSetting } = request.data;

    dispatch({ type: FETCH_SYSTEM_SETTINGS, payload: systemSetting });

    if (conversations.length > 0) {
      const id = conversations[0].id;
      request = await axios.get(`/api/conversation/${id}`);
    }
    dispatch({
      type: FETCH_CONVERSATION_LIST,
      payload: { conversations, selectedConversation: request.data }
    });
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
    console.log(err);
    dispatch({
      type: LOGIN_ERROR,
      payload: 'We cannot find a user! Invalid Email or Password'
    });
    dispatch({ type: LOADING, payload: false });
  }
};

export const signUp = (data, callback) => async dispatch => {
  dispatch({ type: LOADING, payload: true });

  try {
    await axios.post(`/api/signup`, data);
    callback();
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
