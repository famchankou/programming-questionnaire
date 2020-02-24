import {
  LOAD_QUESTIONS_REQUEST,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_FAILURE,
} from './types';
import api from 'services/api';

export const loadQuestions = questId => {
  return async dispatch => {
    dispatch(loadQuestionsRequest());
    try {
      const { data } = await api.get(`/api/v1/question/quest/${questId}`);
      dispatch(loadQuestionsSuccess(data));
    } catch (error) {
      dispatch(loadQuestionsFailure(error, 'question'));
    }
  };
};

const loadQuestionsRequest = () => ({
  type: LOAD_QUESTIONS_REQUEST,
});

const loadQuestionsSuccess = data => ({
  type: LOAD_QUESTIONS_SUCCESS,
  payload: {
    data,
  },
});

const loadQuestionsFailure = (error, page) => ({
  type: LOAD_QUESTIONS_FAILURE,
  payload: {
    error: error.message,
    page,
  },
});
