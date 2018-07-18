import { SEND_ERROR_NOTIFICATION, RESET_ERROR, RESET_SUCCESS } from './types';

export const sendErrorNotification = message => {
  return {
    type: SEND_ERROR_NOTIFICATION,
    payload: message
  };
};

export const resetError = () => {
  return { type: RESET_ERROR };
};

export const resetSuccess = () => {
  return { type: RESET_SUCCESS };
};
