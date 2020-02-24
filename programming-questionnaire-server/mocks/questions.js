const questionnaires = require('./questionnaires');
const js = require('./js/data');

js.setQuestionnaireId(questionnaires.items[0].id);

const jsQuestions = js.items.map(item => {
  const clone = JSON.parse(JSON.stringify(item));
  delete clone.__answers__;
  return clone;
});

module.exports = {
  items: [
    ...jsQuestions
  ]
};
