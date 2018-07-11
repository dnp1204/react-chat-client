import { FETCH_USER, LOADING } from './types';
import axios from 'axios';

export const login = (data, callback) => async dispatch => {
  dispatch({ type: LOADING, payload: true });

  try {
    await axios.post(`/api/login`, data);
    try {
      const request = await axios.get(`/api/getUser`);
      console.log(request.data);
      dispatch({ type: FETCH_USER, payload: request.data });
      callback();
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: LOADING, payload: false });
    }
  } catch (err) {
    console.log(err);
  } finally {
    dispatch({ type: LOADING, payload: false });
  }
};

export const fetchUser = () => async dispatch => {
  dispatch({ type: LOADING, payload: true });

  try {
    const request = await axios.get(`/api/getUser`);
    dispatch({ type: FETCH_USER, payload: request.data });
  } catch (err) {
  } finally {
    dispatch({ type: LOADING, payload: false });
  }
};
