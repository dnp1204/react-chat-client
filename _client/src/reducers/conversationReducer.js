import {
  FETCH_CONVERSATION_LIST,
  SELECT_CONVERSATION,
  NEW_MESSAGE,
  FRIEND_ONLINE,
  FRIEND_OFFLINE
} from '../actions/types';

const user = {
  avatarUrl: '',
  id: '',
  firstName: '',
  lastName: '',
  isOnline: '',
  lastTimeOnline: ''
};

const conversation = {
  id: '',
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

    case FRIEND_ONLINE:
    case FRIEND_OFFLINE:
      state.conversations.forEach(conversation => {
        for (let user of conversation.users) {
          if (user.id === action.payload.id) {
            user.isOnline = action.payload.isOnline;
            break;
          }
        }
      });

      for (let user of state.selectedConversation.users) {
        if (user.id === action.payload.id) {
          user.isOnline = action.payload.isOnline;
          user.lastTimeOnline = action.payload.lastTimeOnline;
          break;
        }
      }

      return { ...state };

    default:
      return state;
  }
}
