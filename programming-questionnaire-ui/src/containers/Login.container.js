import { connect } from 'react-redux';
import LoginFormComponent from 'components/LoginForm';
import withErrorMessage from 'components/HOCs/withError';
import { loginFlow } from 'store/auth/login';

const mapStateToProps = state => ({
  isRequesting: state.auth.isRequesting,
});

const mapDispatchToProps = dispatch => {
  return {
    loginUser: values => {
      dispatch(loginFlow(values));
    },
  };
};

export default withErrorMessage('login')(
  connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent)
);
