import {
  LOAD_QUESTIONARIES_REQUEST,
  LOAD_QUESTIONARIES_SUCCESS,
  LOAD_QUESTIONARIES_FAILURE,
  SELECT_QUESTIONARY,
  LOAD_CURRENT_QUESTIONARY_REQUEST,
  LOAD_CURRENT_QUESTIONARY_SUCCESS,
  LOAD_CURRENT_QUESTIONARY_FAILURE,
} from './types';
import api from 'services/api';

export const loadQuestionaries = () => {
  return async dispatch => {
    dispatch(loadQuestionariesRequest());
    try {
      const { data } = await api.get('/api/v1/questionnaire/all/questionnaires');
      dispatch(loadQuestionariesSuccess(data));
    } catch (error) {
      dispatch(loadQuestionariesFailure(error));
    }
  };
};

export const selectQuestionary = questionary => {
  return async dispatch => {
    dispatch(selectQuestionarySuccess(questionary));
  };
};

export const loadCurrentQuestionary = id => {
  return async dispatch => {
    dispatch(loadCurrentQuestionaryRequest());
    try {
      const { data } = await api.get(`/api/v1/questionnaire/${id}`);
      dispatch(loadCurrentQuestionarySuccess(data));
    } catch (error) {
      dispatch(loadCurrentQuestionaryFailure(error));
    }
  };
};

const selectQuestionarySuccess = questionary => ({
  type: SELECT_QUESTIONARY,
  payload: {
    questionary,
  },
});

const loadQuestionariesRequest = () => ({
  type: LOAD_QUESTIONARIES_REQUEST,
});

const loadQuestionariesSuccess = data => ({
  type: LOAD_QUESTIONARIES_SUCCESS,
  payload: {
    data,
  },
});

const loadQuestionariesFailure = error => ({
  type: LOAD_QUESTIONARIES_FAILURE,
  payload: {
    error: error.message,
  },
});

const loadCurrentQuestionaryRequest = () => ({
  type: LOAD_CURRENT_QUESTIONARY_REQUEST,
});

const loadCurrentQuestionarySuccess = data => ({
  type: LOAD_CURRENT_QUESTIONARY_SUCCESS,
  payload: {
    data,
  },
});

const loadCurrentQuestionaryFailure = error => ({
  type: LOAD_CURRENT_QUESTIONARY_FAILURE,
  payload: {
    error: error.message,
  },
});
