import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { PrivateRoute } from 'components/HOCs';
import { LoginPage, RegistrationPage, MainPage } from 'containers';
import './App.css';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <Switch>
      <PrivateRoute path="/" exact component={MainPage} isAuth={isAuth} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/registration" exact component={RegistrationPage} />
    </Switch>
  );
};

export default withRouter(App);
