import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { PrivateRoute } from 'components/HOCs';
import {
  LoginPage,
  RegistrationPage,
  MainPage,
  QuestionPage,
  ProfilePage,
} from 'containers';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <Switch>
      <PrivateRoute path="/" exact component={MainPage} isAuth={isAuth} />
      <PrivateRoute
        path="/:questionareId/question"
        exact
        component={QuestionPage}
        isAuth={isAuth}
      />
      <PrivateRoute path="/profile" exact component={ProfilePage} isAuth={isAuth} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/registration" exact component={RegistrationPage} />
    </Switch>
  );
};

export default withStyles(styles)(withRouter(App));
