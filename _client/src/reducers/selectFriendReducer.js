import { SELECT_FRIEND } from '../actions/types';
import moment from 'moment';

const imageUrl = 'https://pbs.twimg.com/profile_images/833767319973212161/Ft904pMk_400x400.jpg';

const initialState = {
  _id: 0,
  avatar: imageUrl,
  firstName: 'An',
  lastName: 'Nguyen',
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