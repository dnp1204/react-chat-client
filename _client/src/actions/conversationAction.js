import axios from 'axios';
import { SELECT_CONVERSATION, LOADING } from './types';

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
