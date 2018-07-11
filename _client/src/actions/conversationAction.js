import axios from 'axios';
import { SELECT_CONVERSATION, NEW_MESSAGE, LOADING } from './types';

export const selectConversation = conversationId => async dispatch => {
  // dispatch({ type: LOADING, payload: true });
  try {
    const request = await axios.get(`/api/conversation/${conversationId}`);
    dispatch({ type: SELECT_CONVERSATION, payload: request.data });
  } catch (err) {
    console.log(err);
  } finally {
    dispatch({ type: LOADING, payload: false });
  }
};

export const receiveMessage = message => {
  return { type: NEW_MESSAGE, payload: message };
};
