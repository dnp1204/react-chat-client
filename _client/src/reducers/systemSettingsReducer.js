import {
  CHANGE_SYSTEM_COLOR,
  CHANGE_SHOW_OPTIONS,
  CHANGE_SHOW_PHOTOS,
  CHANGE_SYSTEM_EMOJI,
  CHANGE_SHOW_SUMMARY_AND_TOOL_SECTION,
  FETCH_SYSTEM_SETTINGS,
  CHANGE_SHOW_SEARCH_INPUT
} from '../actions/types';
import { Color, EmojiId } from '../utils/constants';

const emojiIdsForOptions = [EmojiId.GRIN];

const initialState = {
  systemColor: Color.BLUE,
  showOptions: true,
  showPhotos: false,
  showSearch: false,
  recentlyEmoji: [],
  selectedEmoji: {
    id: '+1',
    native: ''
  },
  showSummaryAndToolSection: true,
  emojiIdsForOptions
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SYSTEM_SETTINGS:
      return { emojiIdsForOptions, ...action.payload };
    case CHANGE_SYSTEM_COLOR:
      return { ...state, systemColor: action.payload };
    case CHANGE_SHOW_OPTIONS:
      return { ...state, showOptions: action.payload };
    case CHANGE_SHOW_PHOTOS:
      return { ...state, showPhotos: action.payload };
    case CHANGE_SYSTEM_EMOJI:
      const { emojiId, emojiNative } = action.payload;
      return { ...state, selectedEmoji: { id: emojiId, native: emojiNative } };
    case CHANGE_SHOW_SUMMARY_AND_TOOL_SECTION:
      return { ...state, showSummaryAndToolSection: action.payload };
    case CHANGE_SHOW_SEARCH_INPUT:
      return { ...state, showSearch: action.payload };
    default:
      return state;
  }
}
