import { SEND_MESSAGE } from './types';

export const sendMessage = (message) => async dispatch => {
    dispatch({ type: SEND_MESSAGE, payload: message });
}