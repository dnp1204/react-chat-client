import { SELECT_FRIEND } from './types';

export const selectFriend = (selectedFriend) => {
  return { type: SELECT_FRIEND, payload: selectedFriend }
}