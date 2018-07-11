import { FETCH_CONVERSATION_LIST, SELECT_CONVERSATION } from '../actions/types';

const conversation = {
  _id: '',
  updatedAt: '',
  users: [
    {
      avatarUrl: '',
      id: '',
      firstName: '',
      lastName: ''
    }
  ]
};

const initialState = {
  selectedConversation: conversation,
  conversations: [conversation]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONVERSATION_LIST:
      const conversations = action.payload;
      return {
        selectedConversation: conversations[0] || conversation,
        conversations
      };
    case SELECT_CONVERSATION:
      return { ...state, selectedConversation: action.payload };
    default:
      return state;
  }
}
