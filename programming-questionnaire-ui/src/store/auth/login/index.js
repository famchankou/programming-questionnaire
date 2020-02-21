import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
import api from 'services/api';
import auth from 'utils/auth';

export const loginFlow = ({ email, password }) => {
  return async dispatch => {
    dispatch(loginRequest());
    try {
      const { token } = await api.post('auth/token', { email, password });
      auth.setToken(token);
      const { user } = auth.decodeToken(token);
      dispatch(loginSuccess(user));
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
    user,
  },
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error: error.message,
  },
});
