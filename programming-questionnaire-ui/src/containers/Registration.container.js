import { connect } from 'react-redux';
import RegistrationFormComponent from 'components/RegistrationForm';

// const mapStateToProps = state => ({
//   isRequesting: state.auth.isRequesting,
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     loginUser: (email, password) => {
//       dispatch(loginFlow(email, password));
//     },
//   };
// };

export default connect(null, null)(RegistrationFormComponent);
