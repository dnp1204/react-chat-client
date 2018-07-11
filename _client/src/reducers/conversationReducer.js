import {
  FETCH_CONVERSATION_LIST,
  SELECT_CONVERSATION,
  NEW_MESSAGE
} from '../actions/types';

const user = {
  avatarUrl: '',
  id: '',
  firstName: '',
  lastName: ''
};

const conversation = {
  _id: '',
  updatedAt: '',
  users: [user],
  contents: [
    {
      id: '',
      sendByUser: user
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
      return {
        selectedConversation: action.payload.selectedConversation,
        conversations: action.payload.conversations
      };
    case SELECT_CONVERSATION:
      return { ...state, selectedConversation: action.payload };
    case NEW_MESSAGE:
      const selectedConversation = state.selectedConversation;
      selectedConversation.contents.push(action.payload);
      selectedConversation.updatedAt = action.payload.createdAt;
      const filteredConversations = state.conversations.filter(conversation => {
        return conversation.id !== selectedConversation.id;
      });
      filteredConversations.unshift(selectedConversation);
      return { conversations: filteredConversations, selectedConversation };
    default:
      return state;
  }
}
