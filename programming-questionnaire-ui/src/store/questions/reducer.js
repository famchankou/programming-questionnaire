import {
  LOAD_QUESTIONS_REQUEST,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_FAILURE,
} from './types';

const initialState = {
  data: [],
  isRequesting: false,
  error: null,
};

/**
 * Reducer for questions flow
 * @param {Object} state - initial state
 * @param {Object} action - action with type and payload properties
 */

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case LOAD_QUESTIONS_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        data: action.payload.data,
      };
    case LOAD_QUESTIONS_FAILURE:
      return {
        ...state,
        isRequesting: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default questionsReducer;
