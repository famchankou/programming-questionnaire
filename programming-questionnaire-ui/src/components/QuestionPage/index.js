import React, { useEffect } from 'react';
import PageTemplate from 'components/templates/PageTemplate';
import Typography from '@material-ui/core/Typography';
import QuestionComponent from 'components/common/Question';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

const QuestionPage = ({ classes, questionaryName, loadCurrentQuestionary, match }) => {
  useEffect(() => {
    if (!questionaryName) loadCurrentQuestionary(match.params.questionareId);
  }, [questionaryName, loadCurrentQuestionary, match]);
  return (
    <PageTemplate>
      <div className={classes.questionsContainer}>
        <Typography component="h1" variant="h5">
          {questionaryName}
        </Typography>
        <QuestionComponent question="Hello" />
      </div>
    </PageTemplate>
  );
};

export default withStyles(styles)(QuestionPage);
