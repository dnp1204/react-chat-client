import { LOADING } from '../actions/types';

const initialState = {
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
