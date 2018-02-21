import { SELECT_FRIEND } from './types';

export const selectFriend = (id) => {
  return { type: SELECT_FRIEND, payload: id }
}