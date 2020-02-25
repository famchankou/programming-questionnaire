import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';
import { push } from 'connected-react-router';
import api from 'services/api';
import auth from 'utils/auth';

/**
 * Redux action creators for login flow
 */

/**
 * Async thunk action creator for login user
 * @param {String} username - username for login
 * @param {String} password - password for login
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

/**
 * Async thunk action creator for logout user
 * Removing token from local storage and from Authorization header in axios instance
 */

export const unauthorize = () => {
  return async dispatch => {
    auth.removeToken();
    api.deleteAuthTokenFromHeader();
    dispatch(logoutSuccess());
    dispatch(push('/login'));
  };
};

/**
 * Sync action creators
 */

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
