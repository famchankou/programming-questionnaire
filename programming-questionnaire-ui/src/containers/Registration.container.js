import { connect } from 'react-redux';
import RegistrationFormComponent from 'components/RegistrationForm';
import { registrationFlow } from 'store/auth/registration';

const mapStateToProps = state => ({
  isRequesting: state.registration.isRequesting,
});

const mapDispatchToProps = dispatch => {
  return {
    registerUser: values => {
      dispatch(registrationFlow(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormComponent);
