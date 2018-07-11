import {
  FETCH_CONVERSATION_LIST,
  SELECT_CONVERSATION,
  NEW_MESSAGE
} from '../actions/types';

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
  ],
  contents: []
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
