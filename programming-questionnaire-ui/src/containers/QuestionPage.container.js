import { connect } from 'react-redux';
import QuestionPage from 'components/QuestionPage';
import withErrorMessage from 'components/HOCs/withError';
import { loadCurrentQuestionary } from 'store/questionaries';
import { loadQuestions } from 'store/questions';

const mapStateToProps = state => ({
  questionaryName: state.questionaries.selectedQuestionary.title,
  questionaryId: state.questionaries.selectedQuestionary.id,
  questions: state.questions.data,
});

const mapDispatchToProps = dispatch => {
  return {
    loadCurrentQuestionary: id => {
      dispatch(loadCurrentQuestionary(id));
    },
    loadQuestions: id => {
      dispatch(loadQuestions(id));
    },
  };
};

export default withErrorMessage('question')(
  connect(mapStateToProps, mapDispatchToProps)(QuestionPage)
);
