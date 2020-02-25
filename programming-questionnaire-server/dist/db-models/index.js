"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var sequelize = new _sequelize["default"](process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  dialect: 'postgres'
});
exports.sequelize = sequelize;
var models = {
  User: sequelize["import"]('./user'),
  Questionnaire: sequelize["import"]('./questionnaire'),
  Question: sequelize["import"]('./question'),
  Answer: sequelize["import"]('./answer'),
  Progress: sequelize["import"]('./progress'),
  ProgressAnswer: sequelize["import"]('./progress-answer')
};
Object.keys(models).forEach(function (key) {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});
var _default = models;
exports["default"] = _default;
//# sourceMappingURL=index.js.map