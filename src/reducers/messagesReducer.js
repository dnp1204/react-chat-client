import moment from 'moment';
import { FETCH_MESSAGES, SEND_MESSAGE } from '../actions/types';

const imageUrl = 'https://pbs.twimg.com/profile_images/833767319973212161/Ft904pMk_400x400.jpg';

const initialState = { friendId: 1, messages: []};

for (let index = 0; index < 20; index++) {
  const message = {
    _id: index,
    user: {
      userId: Math.floor(Math.random() * 2),
      imageUrl
    },
    timestamp: moment.now(),
    content: 'Cái mặt này ko có mấy vạch nhỏ anh'
  }

  initialState.messages.push(message);
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case FETCH_MESSAGES:
    default:
      return state;
  }
}