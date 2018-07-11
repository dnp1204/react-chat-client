import axios from 'axios';
import { FETCH_FRIEND_LIST, SELECT_FRIEND, LOADING } from './types';

export const fetchFriendList = () => async dispatch => {
  dispatch({ type: LOADING, payload: true });

  try {
    const request = await axios.get('/api/friends');
    const { friends } = request.data;
    dispatch({ type: FETCH_FRIEND_LIST, payload: friends });

    if (friends.length > 0) {
      dispatch({ type: SELECT_FRIEND, payload: friends[0] });
    }
  } catch (err) {
    console.log(err);
  } finally {
    dispatch({ type: LOADING, payload: false });
  }
};
