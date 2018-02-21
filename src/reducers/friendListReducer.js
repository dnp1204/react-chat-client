import { FETCH_FRIEND_LIST } from '../actions/types';

const imageUrl =
  'https://en.wikipedia.org/wiki/Avatar_(computing)#/media/File:CandymyloveYasu.png';

const person = {
  _id: 0,
  avatar: imageUrl,
  firstName: 'An',
  lastName: 'Nguyen',
  lastMessage: 'hello',
  lastSendMessageDate: Date.now()
};

const initialState = [];

for (let index = 0; index < 20; index++) {
  person._id = index;
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
