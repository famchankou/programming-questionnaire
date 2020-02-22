import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

const answers = [
  'ReactDOM.start()',
  'React.render()',
  'ReactDOM.render()',
  'React.mount()',
];

const QuestionComponent = ({ classes, question, handleSubmit }) => {
  const [checkedAnswer, setAnswer] = useState('');
  const handleChange = event => {
    setAnswer(event.target.value);
  };
  return (
    <div className={classes.questionWrapper}>
      <Paper className={classes.paper}>
        <div className={classes.titleContainer}>
          <Typography component="h1" variant="h5">
            {question}
          </Typography>
        </div>
        <RadioGroup
          aria-label="gender"
          name="gender2"
          value={checkedAnswer}
          onChange={handleChange}
          className={classes.answersContainer}
        >
          {answers.map(answer => (
            <FormControlLabel
              value={answer}
              control={<Radio />}
              label={answer}
              key={answer}
            />
          ))}
        </RadioGroup>
        <Button
          variant="outlined"
          disabled={!checkedAnswer}
          onClick={() => {
            console.log(checkedAnswer);
          }}
        >
          Next question
        </Button>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(QuestionComponent);
