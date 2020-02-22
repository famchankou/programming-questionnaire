import { connect } from 'react-redux';
import RegistrationFormComponent from 'components/RegistrationForm';
import withErrorMessage from 'components/HOCs/withError';
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

export default withErrorMessage('registration')(
  connect(mapStateToProps, mapDispatchToProps)(RegistrationFormComponent)
);
