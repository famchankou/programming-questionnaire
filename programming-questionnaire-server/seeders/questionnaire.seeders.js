'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('questionnaires', [
      {
        id: uuidv4(),
        title: 'JavaScript',
        description: 'JavaScript - is an interpreted programming language that conforms to the ECMAScript specification.',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'Algorithms',
        description: 'Searching, Sorting, Graphs, Big O Notation, etc.',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'CSS',
        description: 'CSS is a language that describes the style of an HTML document.',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'React',
        description: 'React - A JavaScript library for building user interfaces',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'Node.js',
        description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'HTML',
        description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.',
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('questionnaires', null, {});
  }
};
