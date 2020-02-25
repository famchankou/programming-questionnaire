import Sequelize from 'sequelize';
let sequelize;

if (process.env.DATABASE_CONNECTION_STRING) {
  sequelize = new Sequelize(process.env.DATABASE_CONNECTION_STRING);
} else {
  sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
    },
  );
}

const models = {
  User: sequelize.import('./user'),
  Questionnaire: sequelize.import('./questionnaire'),
  Question: sequelize.import('./question'),
  Answer: sequelize.import('./answer'),
  Progress: sequelize.import('./progress'),
  ProgressAnswer: sequelize.import('./progress-answer')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
