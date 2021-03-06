import {
  LOAD_QUESTIONARIES_REQUEST,
  LOAD_QUESTIONARIES_SUCCESS,
  LOAD_QUESTIONARIES_FAILURE,
  SELECT_QUESTIONARY,
  LOAD_CURRENT_QUESTIONARY_REQUEST,
  LOAD_CURRENT_QUESTIONARY_SUCCESS,
  LOAD_CURRENT_QUESTIONARY_FAILURE,
} from './types';

const initialState = {
  data: [],
  selectedQuestionary: {},
  isRequesting: false,
  error: null,
};

/**
 * Reducer for questionier flow
 * @param {Object} state - initial state
 * @param {Object} action - action with type and payload properties
 */

const questionierReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_QUESTIONARIES_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case LOAD_QUESTIONARIES_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        data: action.payload.data,
      };
    case LOAD_QUESTIONARIES_FAILURE:
      return {
        ...state,
        isRequesting: false,
        error: action.payload.error,
      };
    case SELECT_QUESTIONARY: {
      return {
        ...state,
        selectedQuestionary: action.payload.questionary,
      };
    }
    case LOAD_CURRENT_QUESTIONARY_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case LOAD_CURRENT_QUESTIONARY_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        selectedQuestionary: action.payload.data,
      };
    case LOAD_CURRENT_QUESTIONARY_FAILURE:
      return {
        ...state,
        isRequesting: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default questionierReducer;
