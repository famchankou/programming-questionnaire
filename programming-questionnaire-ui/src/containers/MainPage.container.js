import { connect } from 'react-redux';
import MainPageComponent from 'components/MainPage';
import withErrorMessage from 'components/HOCs/withError';
import { loadQuestionaries, selectQuestionary } from 'store/questionaries';

const mapStateToProps = state => ({
  questionaries: state.questionaries.data,
  isRequesting: state.questionaries.isRequesting,
});

const mapDispatchToProps = dispatch => {
  return {
    loadQuestionaries: () => {
      dispatch(loadQuestionaries());
    },
    selectQuestionary: questionary => {
      dispatch(selectQuestionary(questionary));
    },
  };
};

export default withErrorMessage('home')(
  connect(mapStateToProps, mapDispatchToProps)(MainPageComponent)
);
