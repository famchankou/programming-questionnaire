import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';
import { push } from 'connected-react-router';
import api from 'services/api';
import auth from 'utils/auth';

/**
 * Redux action creators and dispatchers for login flow
 */

export const loginFlow = ({ username, password }) => {
  return async dispatch => {
    dispatch(loginRequest());
    try {
      const { data } = await api.post('/api/v1/auth', { username, password });
      auth.setToken(data.token);
      api.setAuthTokenToHeader(data.token);
      dispatch(loginSuccess(data.data.user));
      dispatch(push('/'));
    } catch (error) {
      dispatch(loginFailure(error, 'login'));
    }
  };
};

export const unauthorize = () => {
  return async dispatch => {
    auth.removeToken();
    api.deleteAuthTokenFromHeader();
    dispatch(logoutSuccess());
    dispatch(push('/login'));
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

const loginFailure = (error, page) => ({
  type: LOGIN_FAILURE,
  payload: {
    error: error.message,
    page,
  },
});

const logoutSuccess = () => ({
  type: LOGOUT,
});
