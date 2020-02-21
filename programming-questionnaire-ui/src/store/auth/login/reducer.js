import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

const initialState = {
  user: {},
  isRequesting: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isRequesting: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default loginReducer;
