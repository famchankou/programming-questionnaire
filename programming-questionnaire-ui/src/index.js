import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import store from './store';
import history from './store/history';
import './index.css';
import App from './components/App';

/**
 * Root component with applaying store and browser history
 */

const RootApp = () => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<RootApp />, document.getElementById('root'));
