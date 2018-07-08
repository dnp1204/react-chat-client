import axios from 'axios';
import { FETCH_FRIEND_LIST, SELECT_FRIEND } from './types';

export const fetchFriendList = () => async dispatch => {
  try {
    const request = await axios.get('/api/friends');
    const { friends } = request.data;
    dispatch({ type: FETCH_FRIEND_LIST, payload: friends });

    if (friends.length > 0) {
      dispatch({ type: SELECT_FRIEND, payload: friends[0] });
    }
  } catch (err) {}
};
