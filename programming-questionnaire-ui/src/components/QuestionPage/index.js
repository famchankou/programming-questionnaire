import React, { useEffect, useState } from 'react';
import PageTemplate from 'components/templates/PageTemplate';
import Typography from '@material-ui/core/Typography';
import QuestionComponent from 'components/common/Question';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

/**
 * Question page with logic of questions and answers
 * @param {Object} classes - Styles
 * @param {String} questionaryName - nane of questionary
 * @param {Function} loadCurrentQuestionary - function to fetch current questionary by id
 * @param {String} match - react-router props to get id of questionary
 * @param {Function} loadQuestions - function to get questions
 * @param {String} questionaryId - id of questionary
 * @param {Array} questions - array of questions
 */

const QuestionPage = ({
  classes,
  questionaryName,
  loadCurrentQuestionary,
  match,
  loadQuestions,
  questionaryId,
  questions,
}) => {
  // state of the component
  // state for the disabling next button
  const [disabledNext, setNextButtonState] = useState(false);
  // state for the current index of the question array
  const [currentIndex, setIndex] = useState(0);
  // state for storing selected answer
  const [checkedAnswer, setAnswer] = useState('');

  useEffect(() => {
    //fetch questionary if it empty
    if (!questionaryName) loadCurrentQuestionary(match.params.questionareId);
    // fetch questions if questionary id is not empty
    if (questionaryId) loadQuestions(questionaryId);
  }, [questionaryName, loadCurrentQuestionary, match, loadQuestions, questionaryId]);

  // handler of the next button to set next index and disable button if it last
  const handleNext = () => {
    let index = currentIndex + 1;
    let disabledNext = index === questions.length - 1;
    setNextButtonState(disabledNext);
    setIndex(index);
    setAnswer('');
  };

  // handler to set answer
  const handleChange = event => {
    setAnswer(event.target.value);
  };

  // get question by index
  const question = questions ? questions[currentIndex] : null;

  return (
    <PageTemplate>
      <div className={classes.questionsContainer}>
        <Typography component="h1" variant="h5">
          {questionaryName}
        </Typography>
        {questions.length > 0 && (
          <QuestionComponent
            question={question}
            handleNext={handleNext}
            disabledNext={disabledNext}
            checkedAnswer={checkedAnswer}
            handleChange={handleChange}
          />
        )}
      </div>
    </PageTemplate>
  );
};

export default withStyles(styles)(QuestionPage);
