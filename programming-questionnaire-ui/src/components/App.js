import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { LoginPage, RegistrationPage } from 'containers';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/registration" exact component={RegistrationPage} />
    </Switch>
  );
};

export default withRouter(App);
