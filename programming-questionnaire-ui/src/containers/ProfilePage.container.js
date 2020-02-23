import { connect } from 'react-redux';
import ProfilePageComponent from 'components/ProfilePage';
import withErrorMessage from 'components/HOCs/withError';

const mapStateToProps = state => ({
  categories: state.questionaries?.data.map(item => item.name),
});

// const mapDispatchToProps = dispatch => {
//   return {
//     loadQuestionaries: () => {
//       dispatch(loadQuestionaries());
//     },
//     selectQuestionary: questionary => {
//       dispatch(selectQuestionary(questionary));
//     },
//   };
// };

export default withErrorMessage('profile')(
  connect(mapStateToProps, null)(ProfilePageComponent)
);
