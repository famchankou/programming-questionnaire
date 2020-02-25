"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let sequelize;
exports.sequelize = sequelize;

if (process.env.DATABASE_CONNECTION_STRING) {
  exports.sequelize = sequelize = new _sequelize.default(process.env.DATABASE_CONNECTION_STRING);
} else {
  exports.sequelize = sequelize = new _sequelize.default(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    dialect: 'postgres'
  });
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
var _default = models;
exports.default = _default;
//# sourceMappingURL=index.js.map