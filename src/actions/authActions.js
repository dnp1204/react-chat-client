import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    const user = { id: 'asdasdasdasd' };
    dispatch({ type: FETCH_USER, payload: user });
}