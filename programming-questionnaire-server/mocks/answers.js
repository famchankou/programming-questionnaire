const js = require('./js/data');
const algorithms = require('./algorithms/data');
const css = require('./css/data');
const react = require('./react/data');
const node = require('./node/data');
const html = require('./html/data');

module.exports = {
  items: [
    ...[].concat.apply([], js.items.map(question => question.__answers__)),
    ...[].concat.apply([], algorithms.items.map(question => question.__answers__)),
    ...[].concat.apply([], css.items.map(question => question.__answers__)),
    ...[].concat.apply([], react.items.map(question => question.__answers__)),
    ...[].concat.apply([], node.items.map(question => question.__answers__)),
    ...[].concat.apply([], html.items.map(question => question.__answers__))
  ]
};
