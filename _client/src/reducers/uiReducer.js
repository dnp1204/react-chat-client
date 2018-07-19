import {
  CHANGE_SHOW_OPTIONS,
  CHANGE_SHOW_PHOTOS,
  CHANGE_SHOW_SEARCH_INPUT,
  CHANGE_SHOW_SUMMARY_AND_TOOL_SECTION,
  CHANGE_SYSTEM_COLOR,
  CHANGE_SYSTEM_EMOJI,
  FETCH_CONVERSATION_SETTINGS,
  FETCH_SYSTEM_SETTINGS,
  LOADING
} from '../actions/types';
import { Color, EmojiId } from '../utils/constants';

const emojiIdsForOptions = [EmojiId.GRIN];

const initialState = {
  systemSettings: {
    showOptions: true,
    showPhotos: true,
    showSearch: false,
    recentlyEmoji: [],
    showSummaryAndToolSection: true,
    emojiIdsForOptions
  },
  conversationSettings: {
    systemColor: Color.BLUE,
    selectedEmoji: {
      id: '+1',
      native: ''
    }
  },
  loading: {
    isLoading: false,
    isLoadingConversations: false,
    isLoadingToSendMessage: false,
    isLoadingToLoadFriend: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SYSTEM_SETTINGS:
      return {
        ...state,
        systemSettings: { ...state.systemSettings, ...action.payload }
      };
    case FETCH_CONVERSATION_SETTINGS:
      return {
        ...state,
        conversationSettings: {
          ...state.conversationSettings,
          ...action.payload
        }
      };
    case CHANGE_SYSTEM_COLOR:
      return {
        ...state,
        conversationSettings: {
          ...state.conversationSettings,
          systemColor: action.payload
        }
      };
    case CHANGE_SHOW_OPTIONS:
      return {
        ...state,
        systemSettings: { ...state.systemSettings, showOptions: action.payload }
      };
    case CHANGE_SHOW_PHOTOS:
      return {
        ...state,
        systemSettings: { ...state.systemSettings, showPhotos: action.payload }
      };
    case CHANGE_SYSTEM_EMOJI:
      const { emojiId, emojiNative } = action.payload;
      return {
        ...state,
        conversationSettings: {
          ...state.conversationSettings,
          selectedEmoji: { id: emojiId, native: emojiNative }
        }
      };
    case CHANGE_SHOW_SUMMARY_AND_TOOL_SECTION:
      return {
        ...state,
        systemSettings: {
          ...state.systemSettings,
          showSummaryAndToolSection: action.payload
        }
      };
    case CHANGE_SHOW_SEARCH_INPUT:
      return {
        ...state,
        systemSettings: { ...state.systemSettings, showSearch: action.payload }
      };
    case LOADING:
      return {
        ...state,
        loading: { ...state.loading, isLoading: action.payload }
      };
    default:
      return state;
  }
}
