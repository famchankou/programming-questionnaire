import React, { useEffect, useState } from 'react';
import PageTemplate from 'components/templates/PageTemplate';
import Typography from '@material-ui/core/Typography';
import QuestionComponent from 'components/common/Question';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

const QuestionPage = ({
  classes,
  questionaryName,
  loadCurrentQuestionary,
  match,
  loadQuestions,
  questionaryId,
  questions,
}) => {
  const [disabledNext, setNextButtonState] = useState(false);
  const [currentIndex, setIndex] = useState(0);
  const [checkedAnswer, setAnswer] = useState('');
  useEffect(() => {
    if (!questionaryName) loadCurrentQuestionary(match.params.questionareId);
    if (questionaryId) loadQuestions(questionaryId);
  }, [questionaryName, loadCurrentQuestionary, match, loadQuestions, questionaryId]);
  const handleNext = () => {
    let index = currentIndex + 1;
    let disabledNext = index === questions.length - 1;
    setNextButtonState(disabledNext);
    setIndex(index);
    setAnswer('');
  };

  const handleChange = event => {
    setAnswer(event.target.value);
  };
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
