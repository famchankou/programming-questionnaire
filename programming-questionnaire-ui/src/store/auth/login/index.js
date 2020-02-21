import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
import api from 'services/api';
import auth from 'utils/auth';

export const loginFlow = ({ username, password }) => {
  return async dispatch => {
    dispatch(loginRequest());
    try {
      const { data } = await api.post('/api/v1/auth', { username, password });
      await auth.setToken(data.token);
      dispatch(loginSuccess(data.data.user));
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
};

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...user,
  },
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error: error.message,
  },
});
