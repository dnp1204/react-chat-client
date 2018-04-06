import { CHANGE_SYSTEM_COLOR, CHANGE_SHOW_OPTIONS, CHANGE_SHOW_PHOTOS, FETCH_SYSTEM_SETTINGS } from '../actions/types';
import { Color } from '../utils/constants';

const initialState = {
  systemColor: Color.BLUE,
  showOptions: true,
  showPhotos: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SYSTEM_SETTINGS:
      return action.payload;
    case CHANGE_SYSTEM_COLOR:
      return { ...state, systemColor: action.payload  };
    case CHANGE_SHOW_OPTIONS:
      return { ...state, showOptions: action.payload  };
    case CHANGE_SHOW_PHOTOS:
      return { ...state, showPhotos: action.payload  };
    default:
      return state;
  }
}