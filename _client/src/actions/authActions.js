import { FETCH_USER, LOADING, FETCH_CONVERSATION_LIST } from './types';
import axios from 'axios';

const getUserAndConversations = async dispatch => {
  try {
    const request = await axios.get(`/api/getUser`);
    dispatch({ type: FETCH_USER, payload: request.data });
    dispatch({
      type: FETCH_CONVERSATION_LIST,
      payload: request.data.conversations
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
