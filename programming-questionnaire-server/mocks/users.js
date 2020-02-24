const { v4: uuidv4 } = require('uuid');
const BC = require('bcryptjs');

module.exports = {
  items: [
    {
      id: uuidv4(),
      username: 'michael',
      email: 'michael@gmail.com',
      password: BC.hashSync('1234', BC.genSaltSync(10)),
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      id: uuidv4(),
      username: 'john',
      email: 'john@gmail.com',
      password: BC.hashSync('1234', BC.genSaltSync(10)),
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      id: uuidv4(),
      username: 'alex',
      email: 'alex@gmail.com',
      password: BC.hashSync('1234', BC.genSaltSync(10)),
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      id: uuidv4(),
      username: 'peter',
      email: 'peter@gmail.com',
      password: BC.hashSync('1234', BC.genSaltSync(10)),
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      id: uuidv4(),
      username: 'helga',
      email: 'helga@gmail.com',
      password: BC.hashSync('1234', BC.genSaltSync(10)),
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      id: uuidv4(),
      username: 'lucid',
      email: 'lucid@gmail.com',
      password: BC.hashSync('1234', BC.genSaltSync(10)),
      updatedAt: new Date(),
      createdAt: new Date()
    }
  ]
};