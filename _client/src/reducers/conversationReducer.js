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
      const { conversationId, message } = action.payload;
      let updatedConversation, filteredConversations;

      if (conversationId === state.selectedConversation.id) {
        updatedConversation = state.selectedConversation;
        updatedConversation.contents.push(message);
        updatedConversation.updatedAt = message.createdAt;

        filteredConversations = state.conversations.filter(conversation => {
          return conversation.id !== conversationId;
        });
        filteredConversations.unshift(updatedConversation);

        return {
          conversations: filteredConversations,
          selectedConversation: updatedConversation
        };
      }

      filteredConversations = state.conversations;
      for (let conversation of filteredConversations) {
        if (conversation.id === conversationId) {
          conversation.contents.unshift(message);
          break;
        }
      }

      return { ...state, conversations: filteredConversations };
    default:
      return state;
  }
}
