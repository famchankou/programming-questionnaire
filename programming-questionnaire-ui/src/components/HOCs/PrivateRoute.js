import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

/**
 * Private route for redirect to login page if you not auth
 * @param {React.Component} component - child component
 * @param {Boolean} isAuth - boolean value: if user is Authenticated
 */

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (isAuth ? <Component {...props} /> : <Redirect to={'/login'} />)}
    />
  );
};

export default withRouter(PrivateRoute);
