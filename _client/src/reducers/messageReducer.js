import { LOGIN_ERROR, RESET_ERROR } from '../actions/types';

const initialState = {
  errors: {
    loginError: ''
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        errors: {
          ...state.error,
          loginError: action.payload
        }
      };
    case RESET_ERROR:
      return {
        ...state,
        errors: initialState.errors
      };
    default:
      return state;
  }
}
