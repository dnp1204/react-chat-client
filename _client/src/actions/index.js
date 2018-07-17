import { SET_SOCKET } from './types';

export * from './uiActions';
export * from './authActions';
export * from './conversationAction';
export * from './messageActions';

export const setSocket = socket => {
  return { type: SET_SOCKET, payload: socket };
};
