'use strict';

const questions = require('../mocks/questions');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('questions', questions.items, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('questions', null, {});
  }
};
