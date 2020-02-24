const questionnaires = require('./questionnaires');
const js = require('./js/data');
const algorithms = require('./algorithms/data');
const css = require('./css/data');
const html = require('./html/data');
const node = require('./node/data');
const react = require('./react/data');

js.setQuestionnaireId(questionnaires.items[0].id);
algorithms.setQuestionnaireId(questionnaires.items[1].id);
css.setQuestionnaireId(questionnaires.items[2].id);
react.setQuestionnaireId(questionnaires.items[3].id);
node.setQuestionnaireId(questionnaires.items[4].id);
html.setQuestionnaireId(questionnaires.items[5].id);

const jsQuestions = js.items.map(item => {
  const clone = JSON.parse(JSON.stringify(item));
  delete clone.__answers__;
  return clone;
});

const algorithmsQuestions = algorithms.items.map(item => {
  const clone = JSON.parse(JSON.stringify(item));
  delete clone.__answers__;
  return clone;
});

const cssQuestions = css.items.map(item => {
  const clone = JSON.parse(JSON.stringify(item));
  delete clone.__answers__;
  return clone;
});

const reactQuestions = react.items.map(item => {
  const clone = JSON.parse(JSON.stringify(item));
  delete clone.__answers__;
  return clone;
});

const nodeQuestions = node.items.map(item => {
  const clone = JSON.parse(JSON.stringify(item));
  delete clone.__answers__;
  return clone;
});

const htmlQuestions = html.items.map(item => {
  const clone = JSON.parse(JSON.stringify(item));
  delete clone.__answers__;
  return clone;
});

module.exports = {
  items: [
    ...jsQuestions,
    ...algorithmsQuestions,
    ...cssQuestions,
    ...reactQuestions,
    ...nodeQuestions,
    ...htmlQuestions
  ]
};
