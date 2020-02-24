import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (isAuth ? <Component {...props} /> : <Redirect to={'/login'} />)}
    />
  );
};

export default withRouter(PrivateRoute);
