import { CLEAR_ERROR_MESSAGE } from './types';

/**
 * Thunk action creator for clear errors reducer
 */

export const clearMessage = () => {
  return async dispatch => {
    dispatch(clearMessageCreator());
  };
};

const clearMessageCreator = () => ({
  type: CLEAR_ERROR_MESSAGE,
});
