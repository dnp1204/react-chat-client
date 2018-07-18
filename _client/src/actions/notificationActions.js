import { SEND_ERROR_NOTIFICATION, RESET_ERROR } from './types';

export const sendErrorNotification = message => {
  return {
    type: SEND_ERROR_NOTIFICATION,
    payload: message
  };
};

export const resetError = () => {
  return { type: RESET_ERROR };
};
