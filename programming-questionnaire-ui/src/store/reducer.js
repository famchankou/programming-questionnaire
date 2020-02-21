import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from 'store/auth/login/reducer';
import history from './history';

const reducers = {
  router: connectRouter(history),
  auth: loginReducer,
};

export default combineReducers(reducers);
