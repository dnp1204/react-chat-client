import { FETCH_USER } from './types';
import axios from 'axios';

export const fetchUser = () => async dispatch => {
  const request = await axios.get(`/api/getUser`);
  console.log(request);
  dispatch({ type: FETCH_USER, payload: request.data });
};
