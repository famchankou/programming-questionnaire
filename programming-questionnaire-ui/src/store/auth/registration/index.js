import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from './types';
import { push } from 'connected-react-router';
import api from 'services/api';

/**
 * Redux action creators for registration flow
 */

/**
 * Thunk action creator for registration user
 * @param {String} username - username for registration
 * @param {String} email - email for registration
 * @param {String} password - password for registration
 * If registration success push user to login page
 */

export const registrationFlow = ({ username, email, password }) => {
  return async dispatch => {
    dispatch(registrationRequest());
    try {
      await api.post('/api/v1/user', { username, email, password });
      dispatch(registrationSuccess());
      dispatch(push('/login'));
    } catch (error) {
      dispatch(registrationFailure(error, 'registration'));
    }
  };
};

/**
 * Sync action creators
 */

const registrationRequest = () => ({
  type: REGISTRATION_REQUEST,
});

const registrationSuccess = () => ({
  type: REGISTRATION_SUCCESS,
});

const registrationFailure = (error, page) => ({
  type: REGISTRATION_FAILURE,
  payload: {
    error: error.message,
    page,
  },
});
