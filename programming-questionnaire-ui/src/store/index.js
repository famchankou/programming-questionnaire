import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import auth from 'utils/auth';
import api from 'services/api';
import history from './history';
import rootReducer from './reducer';

const { getToken, decodeToken } = auth;

/**
 * Initial redux state
 */

const initialInfo = () => {
  // get Token from local storage
  const token = getToken();
  if (token) {
    // If token exists decode and set to request header and to the redux store
    const { id, username, email } = decodeToken(token);
    api.setAuthTokenToHeader(token);
    return {
      auth: {
        user: {
          id,
          username,
          email,
        },
        isRequesting: false,
        isAuth: true,
      },
    };
  }
  return {};
};

const initialState = initialInfo();

// logger and router middleware setup
const middleWare =
  process.env.NODE_ENV !== 'production'
    ? [logger, routerMiddleware(history)]
    : [routerMiddleware(history)];

// setup for redux extension in browser
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk, ...middleWare))
);

export default store;
