import {
  SEND_ERROR_NOTIFICATION,
  RESET_ERROR,
  SEND_SUCCESS_NOTIFICATION
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
      console.log(action.payload);
      return {
        ...state,
        error: { content: action.payload, timeout: 3000 }
      };
    case RESET_ERROR:
      return {
        ...state,
        error: initialState.error
      };
    default:
      return state;
  }
}
