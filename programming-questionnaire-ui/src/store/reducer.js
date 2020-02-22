import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from 'store/auth/login/reducer';
import registrationReducer from 'store/auth/registration/reducer';
import questionaryReducer from 'store/questionaries/reducer';
import errorReducer from 'store/errors/reducer';
import history from './history';

const reducers = {
  router: connectRouter(history),
  auth: loginReducer,
  registration: registrationReducer,
  questionaries: questionaryReducer,
  errors: errorReducer,
};

export default combineReducers(reducers);
