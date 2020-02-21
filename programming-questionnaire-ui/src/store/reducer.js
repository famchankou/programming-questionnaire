import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './history';

const reducers = {
  router: connectRouter(history),
};

export default combineReducers(reducers);
