import moment from 'moment';
import { FETCH_FRIEND_LIST } from '../actions/types';

const imageUrl = 'https://pbs.twimg.com/profile_images/833767319973212161/Ft904pMk_400x400.jpg';

const initialState = [];

for (let index = 0; index < 20; index++) {
  const person = {
    _id: index,
    avatar: imageUrl,
    firstName: 'An',
    lastName: 'Nguyen',
    lastMessage: 'hello',
    lastSendMessageDate: moment.now()
  };
  initialState.push(person);
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FRIEND_LIST:
      return state;
    default:
      return state;
  }
}
