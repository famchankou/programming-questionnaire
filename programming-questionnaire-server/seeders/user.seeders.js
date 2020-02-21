'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        username: 'michael',
        email: 'michael@gmail.com',
        password: '1234',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        username: 'john',
        email: 'john@gmail.com',
        password: '1234',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        username: 'alex',
        email: 'alex@gmail.com',
        password: '1234',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        username: 'peter',
        email: 'peter@gmail.com',
        password: '1234',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        username: 'helga',
        email: 'helga@gmail.com',
        password: '1234',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        username: 'lucid',
        email: 'lucid@gmail.com',
        password: '1234',
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
