'use strict';

const questionnaires = require('../mocks/questionnaires');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('questionnaires', questionnaires.items, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('questionnaires', null, {});
  }
};
