import { connect } from 'react-redux';
import MainPageComponent from 'components/MainPage';

const mapStateToProps = state => ({
  username: state.auth.user.username,
});

// const mapDispatchToProps = dispatch => {
//   return {
//     loginUser: values => {
//       dispatch(loginFlow(values));
//     },
//   };
// };

export default connect(mapStateToProps, null)(MainPageComponent);
