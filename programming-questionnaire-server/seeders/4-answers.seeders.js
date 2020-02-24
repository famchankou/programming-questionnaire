'use strict';

const answers = require('../mocks/answers');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('answers', answers.items, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('answers', null, {});
  }
};
