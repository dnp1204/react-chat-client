import {
  SEND_ERROR_NOTIFICATION,
  RESET_ERROR,
  SEND_SUCCESS_NOTIFICATION,
  RESET_SUCCESS
} from '../actions/types';

const initialState = {
  error: {
    content: '',
    timeout: 3000
  },
  success: {
    content: '',
    timout: 3000
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_SUCCESS_NOTIFICATION:
      return {
        ...state,
        success: { content: action.payload, timeout: 3000 }
      };
    case SEND_ERROR_NOTIFICATION:
      return {
        ...state,
        error: { content: action.payload, timeout: 3000 }
      };
    case RESET_ERROR:
      return {
        ...state,
        error: initialState.error
      };
    case RESET_SUCCESS:
      return {
        ...state,
        success: initialState.success
      };
    default:
      return state;
  }
}
