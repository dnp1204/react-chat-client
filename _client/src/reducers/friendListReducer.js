import moment from 'moment';
import { FETCH_FRIEND_LIST } from '../actions/types';

const initialState = [
  {
    avatarUrl: '',
    id: '',
    firstName: '',
    lastName: '',
    lastSendMessageDate: moment.now()
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FRIEND_LIST:
      return action.payload;
    default:
      return state;
  }
}
