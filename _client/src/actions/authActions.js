import { FETCH_USER } from './types';
import axios from 'axios';

export const login = (data, callback) => async dispatch => {
  let request = await axios.post(`/api/login`, data);
  if (request.status === 200) {
    request = await axios.get(`/api/getUser`);
    console.log(request);
    if (request.status === 200) {
      dispatch({ type: FETCH_USER, payload: request.data });
      callback();
    }
  } else {
    dispatch({ type: FETCH_USER, payload: {} });
  }
};

export const fetchUser = () => async dispatch => {
  const request = await axios.get(`/api/getUser`);
  dispatch({ type: FETCH_USER, payload: request.data });
};
