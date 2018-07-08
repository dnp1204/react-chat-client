import { SELECT_FRIEND } from '../actions/types';
import moment from 'moment';

const initialState = {
  avatarUrl: '',
  id: '',
  firstName: '',
  lastName: '',
  lastSendMessageDate: moment.now()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_FRIEND:
      return action.payload;
    default:
      return state;
  }
}
