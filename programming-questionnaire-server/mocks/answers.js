const js = require('./js/data');

const answers = js.items.map(question => question.__answers__);

module.exports = {
  items: [
    ...[].concat.apply([], answers)
  ]
};
