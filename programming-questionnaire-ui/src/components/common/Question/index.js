import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

/**
 * Question component for showing questions and answers
 * Click button for next question
 * @param {Object} classes - material ui styles
 * @param {Object} question - question object
 * @param {Function} handleNext - handler for next button
 * @param {Boolean} disabledNext - boolean value for disable next button if you don't pick answer or if it the last one
 * @param {String} checkedAnswer - value of the checked answer
 * @param {Function} handleChange - handler for select answer
 */

const QuestionComponent = ({
  classes,
  question,
  handleNext,
  disabledNext,
  checkedAnswer,
  handleChange,
}) => {
  return (
    <div className={classes.questionWrapper}>
      <Paper className={classes.paper}>
        <div className={classes.titleContainer}>
          <Typography component="h1" variant="h5">
            {question.question}
          </Typography>
        </div>
        <RadioGroup
          aria-label="gender"
          name="gender2"
          value={checkedAnswer}
          onChange={handleChange}
          className={classes.answersContainer}
        >
          {question.answers.map(answer => (
            <FormControlLabel
              value={answer.content}
              control={<Radio />}
              label={answer.content}
              key={answer.id}
            />
          ))}
        </RadioGroup>
        <Button
          variant="outlined"
          disabled={!checkedAnswer || disabledNext}
          onClick={handleNext}
        >
          Next question
        </Button>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(QuestionComponent);
