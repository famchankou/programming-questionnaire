import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import auth from 'utils/auth';
import api from 'services/api';
import history from './history';
import rootReducer from './reducer';

const { getToken, decodeToken } = auth;

const initialInfo = () => {
  const token = getToken();
  if (token) {
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

const middleWare =
  process.env.NODE_ENV !== 'production'
    ? [logger, routerMiddleware(history)]
    : routerMiddleware(history);

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
