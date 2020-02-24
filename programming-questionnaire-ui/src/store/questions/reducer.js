import {
  LOAD_QUESTIONS_REQUEST,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_FAILURE,
} from './types';

/**
 * Reducer for questions flow
 */

const initialState = {
  data: [],
  isRequesting: false,
  error: null,
};

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
