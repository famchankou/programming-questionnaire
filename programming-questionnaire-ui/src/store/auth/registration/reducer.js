import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from './types';

const initialState = {
  isRequesting: false,
  error: null,
};

/**
 * Reducer for registration flow
 * @param {Object} state - initial state
 * @param {Object} action - action with type and payload properties
 */

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isRequesting: false,
      };
    case REGISTRATION_FAILURE:
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
