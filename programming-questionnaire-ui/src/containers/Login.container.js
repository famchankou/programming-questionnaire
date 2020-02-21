import { connect } from 'react-redux';
import LoginFormComponent from 'components/LoginForm';
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);
