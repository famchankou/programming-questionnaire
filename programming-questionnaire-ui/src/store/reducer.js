import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from 'store/auth/login/reducer';
import registrationReducer from 'store/auth/registration/reducer';
import questionaryReducer from 'store/questionaries/reducer';
import questionsReducer from 'store/questions/reducer';
import errorReducer from 'store/errors/reducer';
import history from './history';

/**
 * Root reducer
 */

const reducers = {
  router: connectRouter(history),
  auth: loginReducer,
  registration: registrationReducer,
  questionaries: questionaryReducer,
  questions: questionsReducer,
  errors: errorReducer,
};

export default combineReducers(reducers);
