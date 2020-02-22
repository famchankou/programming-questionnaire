import { connect } from 'react-redux';
import QuestionPage from 'components/QuestionPage';
import { loadCurrentQuestionary } from 'store/questionaries';

const mapStateToProps = state => ({
  questionaryName: state.questionaries.selectedQuestionary.title,
});

const mapDispatchToProps = dispatch => {
  return {
    loadCurrentQuestionary: id => {
      dispatch(loadCurrentQuestionary(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
