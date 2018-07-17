import { LOGIN_ERROR, RESET_ERROR } from './types';

export const setLoginError = message => {
  return { type: LOGIN_ERROR, payload: message };
};

export const resetError = () => {
  return { type: RESET_ERROR };
};
